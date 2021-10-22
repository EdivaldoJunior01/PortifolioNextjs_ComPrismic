import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
     <ul>
      <NavLink  title="Home" path="/" />
      <NavLink  title="Projetos" path="/projetos" includes />{/* passar includes no navlink */}
     </ul>
    </Container>
  );
};

export default Header;
