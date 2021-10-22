import {ProjetoContainer} from './styles';
import {AiOutlineRightSquare} from 'react-icons/ai'
import Link from 'next/link';

interface ProjetosProps{ //mudos os valores dentro da index de projetos
  title: string;
  type: string;
  slug: string;
  img: string;
}
export default function ItensProjetos({title, type, slug, img}: ProjetosProps){
  return(
    <ProjetoContainer imgUrl={img} data-aos="fade-up">{/* aos animação importada no index principal */}
      {/* tem que fazer a tipagem da img no style */}
    <section>
      <div className="overlay"/> {/* div criada apenas p/ estilização overlay animação*/}
      <div className="text">
        <h1>#{title}</h1>
        <h2>- {type}</h2>
      </div>
    </section>
    <button type="button">
      <Link href={`/projetos/${slug}`}>
        <a>Ver mais <AiOutlineRightSquare /></a>{/* icone */}
      </Link>
    </button>
    </ProjetoContainer>
  )
}
