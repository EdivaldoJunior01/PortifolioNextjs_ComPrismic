import Header from '../../components/Header'
import {ProjetosContainer} from '../../styles/ProjetoStyles'
import ProjetoItem from '../../components/ProjetoItem'

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'

import Head from 'next/head'

interface IProjeto{
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}
interface ProjetoProps{//ProjetoProps recebe um array de projetos
  projetos: IProjeto [];
}
export default function Projetos({projetos}: ProjetoProps){
  return(
    <ProjetosContainer >
            <Head>
          <title>Projetos | Meu portfólio</title>
          <meta property="og:image" content="/ogimage.png" />{/* / -> aponta direto para pasta public onde esta a img */}
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>
      <Header/> {/* chamando o componente da pag, header */}
      <main className="container">{/* essa classe e p/ herdar o estilo de container  */}

      {/* JEITO ABAIXO MANUALD DE FAZER SEM O PRISMIC */}
        <ProjetoItem

          title="teste123"
          type="website"
          slug="teste123"
          imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
        />
      {projetos.map(projeto =>( //JEITO DIRETO COM O PRISMIC
          <ProjetoItem
          key={projeto.slug}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
          imgUrl={projeto.thumbnail}
        />
      ))};
      </main>
    </ProjetosContainer>
  )
}
//cod abaixo e para API

export const getStaticProps: GetStaticProps = async () =>{
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')], //documento type e o custom types la do prismic no caso do projeto que criei
    {orderings: '[document.first_publication_date desc]'}//ordenando os proj mais recentes para depois os mais velhos
  );
/*   console.log(projectResponse.results);

  return{
    props: {}
  }
} */

  console.log(projectResponse.results);
  const projetos = projectResponse.results.map(projeto =>({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description:projeto.data.description,
    link : projeto.data.link,
    thumbnail: projeto.data.thumbnail.url
  }));

  return{
    props: {
      projetos
    },
    revalidate: 86400
  };
};

