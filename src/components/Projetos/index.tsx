import SectionTitle from '../SectionTitle';
import ItensProjetos from './ItensProjetos';
import { Container } from './styles';
import Link from 'next/link';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjetosProps {
  projetos: IProjeto[];
}
function Projetos({projetos} :ProjetosProps) {
/*   console.log(projetos) */
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" description="Um pouquinho de cada coisa que aprendi"/>
      <section>
       {projetos.slice(0, 3).map(projeto =>( //slice pra pegar no array 3 projetos e map para mapear todos os array, lembrando que esta sendo ordenado pelo mais recente
       //lembrar de colocar os nome igual esta no prismic
         <ItensProjetos
         key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
         />
       ))}{

         /*  <ItensProjetos
        img="https://ibecensino.org.br/wp-content/uploads/2017/07/109246-5-habilidades-essenciais-de-um-gerente-de-projetos-820x820.jpg"
        title="Projeto 01"
        type="Website"
        slug="teste"
        /> {/* ccada vez que chama adc um new project / AQUI E O JEITO MANUAL DE ADD OS PROJETO FORA DO PRISMIC*/} */

      </section>
      <button type="button">
        <Link href="/projetos">
            <a> Ver todos os projetos </a>
        </Link>
      </button>

    </Container>
  );
};

export default Projetos;
