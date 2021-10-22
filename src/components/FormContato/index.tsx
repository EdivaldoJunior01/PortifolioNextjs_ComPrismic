import SectionTitle from '../SectionTitle';
import Formulario from './Formulario';
import { Container } from './styles';


function FormContato() {
  return (
    <Container>
     <SectionTitle
      title={
        <>
          Precisa dos
          <br />
          meus Serviços?
        </>
      }
      description={
        <>
        Preencha o formulário abaixo que
        <br />
        irei retornar em breve :)
        </>
      }
     />
     <Formulario/>
    </Container>
  );
};

export default FormContato;
