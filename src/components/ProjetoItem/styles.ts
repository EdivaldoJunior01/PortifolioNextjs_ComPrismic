import styled from 'styled-components';

interface ContainerProps{//tipagem img
  imgUrl: string;

}
export const Container = styled.div<ContainerProps>` //chamando tipagem da img <>
  >a{
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;//chamando a img dps de fazer a tipagem
    background-size: cover;  /* faz a img se instender dentro do contener */
    height: 10rem; //altura do quadrado do projeto
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 1.5rem;
    border: 2px solid ${({theme})=> theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover{
      border-color: ${({theme})=> theme.primary};
      >div.overlay{
        opacity: 0.5;
      }
    }

      >section{
        z-index: 2;//faz com q o texto dentro da section tenha prioridade na visualização e fique acima do overlay
        h1{
          color: ${({theme})=> theme.primary};
          font-size: 1.5rem;
        }
        h2{
          color: ${({theme})=> theme.secondary};
          font-weight: 300;
          font-size: 1rem;
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
  }

`;
