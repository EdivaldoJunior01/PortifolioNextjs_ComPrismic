import SectionTitle from '../SectionTitle';
import ItemExperiencia from './ItemExperiencia';
import { Container } from './styles';

function ExperienciaCertificado() {
  return (
    <Container>
      <SectionTitle title="5 Anos" description="de experiência" />
      <section>
        <ItemExperiencia
          year="2020-2021"
          title="Atendente e Suporte de TI"
          description="Contratado como estagiário, para auxiliar nas áreas spc, serasa, unimed e também suporte de TI."
        />
         <ItemExperiencia
          year="2015-2018"
          title="Atendente e Caixa"
          description="Atendente e caixa"
        />
        {/* item que fala sobre as experiencia no site, chamo ele aqui */}
      </section>
    </Container>
  );
}

export default ExperienciaCertificado;
