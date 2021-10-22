import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  width: 100%;

>section{
  width: 100%;
  margin-top: 7rem;
  display: flex;
  gap: 1.5rem;

  padding-bottom :8rem; /* parte da borda (linha que fica abaixo de experiencia) */
  border-bottom: 3px solid ${({theme}) => theme.primary};



  @media (max-width: 1000px){
    gap: 1rem;
  }
  @media (max-width: 700px){ /* quando a tela fica muito pequena os intens ficam um abaixo do outro */
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;
  }


}
`;

export const ItemContainer = styled.div`

  >div{
    background: ${({theme}) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;/* largura fixa */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 19rem;//para as caixinhas ficarem do mesmo tamanho independende do tam do texto
    transition: 0.5s; /* trransição da animação */
  }
  h1{
    color: ${({theme}) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;

  }
  h2{
    color: ${({theme}) => theme.secondary};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  p{
    color: ${({theme}) => theme.textLight};
    font-size: 1rem;
    font-weight: 300;

  }
  &:hover >div{/* hover do container inteiro, qnd o container estiver um hover estilize a div*/
    filter: brightness(1.3);
    transform: translateY(-20px);/* quando passar o mause vai brilhar e subir a caixinha */
  }
  &:nth-child(even)>div{ /* basicamente, quando uma caixinha for par na div ela e
     estilizada com essa config, tipo 01- estilizada, 02-não, 03sim... uma sim outra não */
     margin-top: 4rem;
  }
  @media(max-width: 1000px){
    >div{
      height: 15rem;
      padding-top: 1.5;
     h1{
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    h2{
      font-size: 1rem;
    }
    p{
      font-size: 0.9rem;
    }
    }
  }


  @media(max-width: 700px){
    &:nth-child(even) >div{
      margin-top: 0;
    }
    &:hover >div{
      transform: translateX(0);
    }
    >div{
      height: auto ;
      padding: 2rem;
      max-width: 100%;
     h1{
      font-size: 2rem;
    }
    h2{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
    }

  }

`;
