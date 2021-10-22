import {HomeContainer} from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import ExperienciaCertificado from '../components/Experiencia_Certificado';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
//importe abaixo para o prismic
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client'
//importe abaixo para o aos animação
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react';

import Head from 'next/head'

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface HomeProps {
  projetos: IProjeto[];
}
export default function Home({ projetos }: HomeProps) {
  useEffect(() => { //animação do scroll com Biblioteca Aos
    Aos.init({duration: 1500});//tempo de 1s e meio para todas as animações
  }, [])
  return (
    <HomeContainer>
      <Head>
          <title>Home | Meu portfólio</title>
          <meta
            name="description"
            content="Aqui tem alguns projetos feitos por mim"
          />
          <meta property="og:image" content="/ogimage.png" />{/* / -> aponta direto para pasta public onde esta a img */}
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Aqui tem alguns projetos feitos por mim"
          />
      </Head>
    <Header/>

    <main className="container">
      <HomeHero />
      <ExperienciaCertificado />
      <Projetos projetos={projetos}/>
      <Conhecimentos/>
      <FormContato/>
    </main>
    <Footer/> {/* footer vai fora do main pq o main e um container */}
    </HomeContainer>
  ) ;

}
//cod abaixo e para API

export const getStaticProps: GetStaticProps = async () =>{
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')], //documento type e o custom types la do prismic no caso do projeto que criei, e o pro e o nome que coloquei no prismic
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
      projetos //devolve o projeto de cima aq
    },
    revalidate: 86400
  };
};

