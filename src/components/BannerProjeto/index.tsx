import {Container} from './styles';
interface BannerProjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

function BannerProjeto({ title, type, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>   {/* tem que fazer a tipagem da img no style */}
      <div className="overlay"/>  {/* div criada apenas p/ estilização overlay animação*/}
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
    </Container>
  );
}

export default BannerProjeto;
