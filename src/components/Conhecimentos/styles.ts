import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section{
    margin-top: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem; //para da espaçamento

    @media(max-width: 1000px){
      gap: 5rem;
    }
    @media(max-width: 700px){
      gap: 3rem;
      flex-wrap: wrap;//se por acaso o container chegar no limite ele divide o conteudo
      margin-top: 5rem;
    }
  }
`;
export const ContainerConhecimento = styled.div`
  display: flex;
  flex-direction: column;//texto em cima e o item embaixo
  gap: 0.8rem;//distancia do texto para o icone
  align-items: center;
  justify-items: center;

  p{
    color:${({theme})=> theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg{
    width: 6.5rem;
    height: 6.5rem;
    color: ${({theme})=> theme.secondary};
    transition: 0.3s;
  }
  &:hover{
    svg{//quando passar o mause p/ mudar a cor
      color:${({theme})=> theme.primary};
      transform: scale(0.95);//para o icone emcolher um pouquinho no hover
    }

    @media(max-width: 1000px){
      p{
        font-size: 1rem;
      }
      svg{
        width: 5rem;
        height: 5rem;

      }
    }
  }
`;

