import styled from 'styled-components';

export const Container = styled.section` /* container que engloba todos */
  width: 100%;
  display: flex;
  gap: 2rem; /* distanciar */
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  >img{ /* imagen */
    width: 48rem;
    flex: 1;
  }
  >div{ /* onde esta os texto */
    flex: 4;

  }
  @media(max-width: 1450px ){ /* responsividade da pag */
   >img {
     width: 38rem;
   }
   >div{
     flex: 1;
   }
  }
  @media(max-width: 1000px ){ /* responsividade da pag */
   >img {
     width: 22rem;
   }
  }
  @media(max-width: 700px ){ /* responsividade da pag */
   flex-direction: column-reverse; /* qnd encolher a pag o conteudo fica acima da img */
    >div {
     width: 100%;
   }
  }
`;
export const TextContainer = styled.section` /* container do texto */
  margin-bottom: 2rem;
  width: 100%;

  >h1{
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }
  >h2{
    font-size: 3rem;
    font-weight: 300;/* grossura da fonta KKKK */
    color: ${({ theme }) => theme.secondary};
  }
  @media(max-width: 1450px ){ /* responsividade da pag */
   >h1 {
     font-size: 5rem;
   }
   >h2{
     font-size: 2rem;
   }
  }

  @media(max-width: 1000px ){ /* responsividade da pag */
  >h1 {
     font-size: 3rem;
   }
   >h2{
     font-size: 1.5rem;
   }
  }
`;

export const InfosContainer = styled.section `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* p/ separar os blocos */
` ;

export const CodeItem =styled.pre ` /* caixinha com as informações */
  background: ${({theme}) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  /* width: 24rem; /* larg da caixinha */
  width: 27rem;
  align-self: flex-start;
  transition: 1s !important;//!important e p/forçar a utilizar esse css

  @media(max-width: 1450px){ /* responsividade da pag */
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media(max-width: 1000px){ /* responsividade da pag */
    width: 100%;
  }
  &:hover{
    filter: brightness(1.2); /* claridade, qnd passa o mouse por cima da caixinha */

  }
  &:last-child{ /* fazer a ULTIMA CAIXINHA ir p/direita */
    align-self: flex-end;
  }
  >div{
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.roxo{
    color: #c38cdd
  }
  ruby-span.blue{
    color: #7ac7e3
  }
  span.comment{
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem; /* pular a linha */
    display: block; /* faz o infos ir p/ baixo */
  }


` ;
