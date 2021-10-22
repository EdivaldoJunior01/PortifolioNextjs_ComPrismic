
import SectionTitle from '../SectionTitle';
import ItemExperiencia from './ItemExperiencia';
import { Container } from './styles';


function ExperienciaCertificado() {
  return (
    <Container>
      <SectionTitle  title="0 Anos" description="de experiência"/>
      <section>
        <ItemExperiencia
        year="2020"
        title="Suporte de TI - Tristeza e Insegurança "
        description="badeco de geral"/> {/* item que fala sobre as experiencia no sit, chamo ele aqui */}
            <ItemExperiencia
        year="2020"
        title="Suporte de TI - Tristeza e Insegurança "
        description="badeco de geral"/> {/* item que fala sobre as experiencia no sit, chamo ele aqui */}
            <ItemExperiencia
        year="2020"
        title="Suporte de TI - Tristeza e Insegurança "
        description="badeco de geral"/> {/* item que fala sobre as experiencia no sit, chamo ele aqui */}
            <ItemExperiencia
        year="2018"
        title="Suporte de TI - Tristeza e Insegurança "
        description="badeco de geral"/> {/* item que fala sobre as experiencia no sit, chamo ele aqui */}

      </section>
    </Container>
  );
};

export default ExperienciaCertificado;
