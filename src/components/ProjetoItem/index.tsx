import { Container } from './styles';
import Link from 'next/link';/* usando link pelo fato de ficar melhor no navegador doq o onclick */
interface ProjetoItemProps { //mudos os valores dentro da index de projetos
  title: string;
  type: string;
  imgUrl: string;
  slug: string;


}

function ProjetoItem({ title, type, imgUrl, slug }: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl} >.
        {/* tem que fazer a tipagem da img no style */}
     <Link href={`/projetos/${slug}`}>
       <a>
         <div className="overlay"/> {/* div criada apenas p/ estilização overlay animação*/}
         <section>
           <h1>{title}</h1>
           <h2>{type}</h2>
         </section>
       </a>
     </Link>

    </Container>
  );
};

export default ProjetoItem;
