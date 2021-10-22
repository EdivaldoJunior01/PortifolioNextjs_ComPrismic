import Header from '../../../components/Header';
import {ContainerProjeto} from '../../../styles/ContainerProjeto';
import BannerProjeto from '../../../components/BannerProjeto';

import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../../services/prismic';
import Prismic from '@prismicio/client'
import { useRouter } from 'next/router';
import LoadingScreen from '../../../components/LoadingScreen';

import Head from 'next/head'

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjetoProps{
  projeto: IProjeto;
}
export default function Projeto( {projeto}: ProjetoProps){
  const router =  useRouter();
  if(router.isFallback){//se ele estiver buscando conteudo
    return<LoadingScreen/>
  }
  return(
    <ContainerProjeto >
        <Head>
          <title>{projeto.title} | Meu portfólio</title>
          <meta
            name="description" content={projeto.description}
          />
          <meta property="og:image" content={projeto.thumbnail} />{/* / -> aponta direto para pasta public onde esta a img */}
          <meta property="og:image:secure_url" content={projeto.thumbnail} />
          <meta name="twitter:image" content={projeto.thumbnail} />
          <meta name="twitter:image:src" content={projeto.thumbnail} />
          <meta property="og:description"content={projeto.description}
          />
      </Head>
      <Header/>{/* chamando o companente da pag Header*/}
      <BannerProjeto
      title={projeto.title}
      type={projeto.type}
      imgUrl={projeto.thumbnail}
      />{/* componente */}

  {/*   <BannerProjeto
      title="Projeto 01"
      type="website"
      imgUrl="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/04/7-Best-Website-Templates-for-Musicians-and-Bands-358x188.jpg"
      />{/* componente JEITO MANUAL DE FAZER SEM O PRISMIC O P EMBAIXO TBM*/}

      <main>
        <p>{projeto.description}</p>
  {/*       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur ut,
           alias ducimus adipisci nulla deserunt, nemo ad quibusdam autem maiores dicta in.
            Quae distinctio eius quisquam libero voluptatem cumque dolorem neque, facere et
             nemo minus officia, odit mollitia eligendi illo omnis consequuntur itaque quos
             sit vero. Odit eos perferendis debitis harum nostrum. Tenetur quae id aspernatur
             exercitationem perspiciatis rerum voluptas iste amet veniam dolorem accusantium
             quis aut officiis deserunt assumenda commodi maiores laudantium rem, molestias
             sed consectetur possimus illo quaerat? Aperiam, earum? Ea ducimus, a facilis
             commodi suscipit similique, obcaecati, non minus alias asperiores itaque
              atque mollitia aut.
        </p> */}
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
         {/*  <a href="#">Ver projeto online</a> */}
        </button>

      </main>
      </ContainerProjeto>
  )
}
export const getStaticPaths: GetStaticPaths = async () =>{
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'pro')
  ]);

  const paths = projetos.results.map(projeto =>({
    params:{
      slug: projeto.uid
    }
  }))
  return{
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context =>{
  const prismic = getPrismicClient();
  const { slug } = context.params; //para ter acesso a rota precisamos de context e o slug (que e onde fica as rotas)

  const response =  await prismic.getByUID('pro', String(slug), {});//pro e o nome que coloquei no prismic

  const projeto ={
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
   // link: response.data.link.url,//caso tenha um link no prismic
    thumbnail: response.data.thumbnail.url
  }
  console.log(projeto)

  return{
    props: {
      projeto //devolve o projeto de cima aq
    },
    revalidate: 86400
    };
};

