import styled from "styled-components";

interface ContainerProps{//tipagem img
  imgUrl: string;

}
export const Container = styled.div<ContainerProps>`//chamando tipagem da img <>
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;//chamando a img dps de fazer a tipagem
  background-size: cover;  /* faz a img se instender dentro do contener */
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;//faz o texto ir p/ baixo
  justify-content: flex-start;//faz ficar na esquerda

  section{
    z-index: 2;//para da prioriade e ficar na frente do overlay
    h1{
      color: ${({theme})=> theme.primary};
      font-size: 3rem;
    }
    h2{
      color: ${({theme})=> theme.secondary};
      font-weight: 300;
      font-size: 2rem;
    }
  }

  >div.overlay {//div class overlay fora da section
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({theme})=> theme.gradient};
      opacity: 0.7;
      transition: 0.5s;
      left: 0;//left e bottom 0, para ficar no lugar certo
      bottom: 0;
    }

    @media(max-width: 700px){
      padding: 2rem 2.5rem;
      height: 20rem;

      section{
        h1{
          font-size: 1.8rem;
        }
        h2{
          font-size: 1.2rem;
        }
      }
    }

`;
