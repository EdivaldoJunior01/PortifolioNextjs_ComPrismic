import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * { /* seletor que pega tudo do site */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar { /* estilizar o scroll */
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary}; /* acessando o tema do componente e pegando a cor primaria */
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};/* biblioteca polished, lighten e p/ clariar as cores */
    }
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }
  img { /*p/ img ficar responsiva */
    width: 100%;
    max-width: 100%;
  }
  ul { /* remv as bolinhas da lista */
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%; /* tam max da pag */
    margin: 0 auto; /* centralizar */
    max-width: 85rem; /* 1rem equivale a 16px */
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }
`;
