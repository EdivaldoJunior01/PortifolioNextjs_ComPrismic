import { darken } from 'polished';
import styled from 'styled-components';

interface ProjetoProps{//tipagem img
  imgUrl: string;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;/* espaçamento */

  > section{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;


    @media (max-width: 1000px){
      gap: 2rem;
    }
  }
  >button{ //btn que de ver todos os projetos
    background: ${({theme}) => theme.primary};
    padding: .8rem 3rem;
    border-radius: .5rem;
    border: none;
    transition: 0.5s;

    &:hover{
      background: ${({theme}) =>darken (0.05, theme.primary)};
    }
    a{
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media(max-width: 500px){
      padding: 1rem;
      a{
        font-size: 1rem;
      }
    }

  }

`;
export const ProjetoContainer =  styled.div<ProjetoProps>`//chamando tipagem da img <>
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

&:hover{
  >section{
    >div.text{ //quando passar o mause encima do texto ele vai um pouquinho para o lado
      right: -12rem;
    }
    div.overlay{
      opacity: 0.4;//tira a opacidade
    }
  }
  >button a {//saindo da section entrando no bt
    color: ${({theme})=> theme.primary};

  }
}

  >button {
    height: 4rem;
    margin: 0 0 3rem 5rem; /* separando desse jeito pq esta posicionado via margin*/
    background: none;
    border: none;

      a{ // a que esta dentro do botão
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
        display: flex; //p/ alinhar o texto com o item
        align-items: center;
        gap: 0.8rem;//espaçamento
        transition: 0.5s;
      }
  }
  >section{
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl }) no-repeat center;//chamando a img dps de fazer a tipagem
    background-size: cover;/* faz a img se instender dentro do contener */
    position: relative;

    >div.overlay{ //div clas overlay
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({theme})=> theme.gradient};
      opacity: .75;
      transition: 0.5s;
    }

    >div.text{
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content; //Use o espaço que puder (disponível), mas nunca menos do que o seu min-contente nunca mais do que o seu max-content"

      h1{
        color: ${({theme}) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b
      }
      h2{
        color: ${({theme}) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b
      }
    }
  }
  &:nth-child(even){ /* basicamente, quando uma caixinha for par na div ela e
                        estilizada com essa config, tipo 01- estilizada, 02-não, 03sim... uma sim outra não */
    flex-direction: row-reverse;

    >button{ //entrando no botão
      margin: 3rem 5rem 0 0; //invertendo a margim que esta na original la em cima
    }
    >section >div.text{//entrando na div da section q tem a class text
      text-align: right;  //aq basicamente estou invertendo os valores do texto da div,  no caso o texto vai para o outro lado
      right: 0;
      left: -10rem;
    }

    &:hover{
      >section >div.text{
        left: -12rem;
      }
    }
  }
  @media (max-width: 1450px){ //ajustando a tela quando ela for diminuida
    >section{
      width: 40rem;
    }
  }
  @media (max-width: 1000px){
      >section{
        width: 100%;
      >div.text{
        left: 1rem;
        top:  1rem;
      }
    }
    >button{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even){ /* basicamente, quando uma caixinha for par na div ela e
        estilizada com essa config, tipo 01- estilizada, 02-não, 03sim... uma sim outra não */
      flex-direction: row;
          >section{
            width: 100%;
          >div.text{
            left: 1rem;
            top:  1rem;
            text-align: left;

          }
        }
      >button{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }
    &:hover{
      >section >div.text{ //p n animar mais o texto qnd a tela estiver pequena
        left: 1rem;
      }
    }

    }
  }
  @media(max-width: 700px){
    height: 17rem;
  }
  @media(max-width: 450px){
    >button{
      height: auto;
      a{
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }
    >section >div.text{
      h1{
        font-size: 1.5rem;
      }
      h2{
        font-size: 1rem;
      }
    }
  }

`;
