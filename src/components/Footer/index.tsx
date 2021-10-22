import { Container } from './styles';
import {
  AiFillFacebook,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai'

function Footer() {
  function handleRedirect(url: string){
    window.open(url);
  }

  function handleScrollTop(){//function para levar a pag para o topo
    window.scroll({ /* js nativo */
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
    <div className="container">{/* div criada p/ ele seguir a mesma responsividade do site todo */ }
      <button type="button" onClick={handleScrollTop}>  Voltar ao topo</button>
        <section>
            <AiFillFacebook
            onClick={() => handleRedirect('https://www.facebook.com/junior.araujo.12382')}
            />
            <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/EdivaldoJunior01')}
            />
            <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/edivaldo-j%C3%BAnior-9a67391bb/')}
            />
        </section>
    </div>
    </Container>
  );
};

export default Footer;
