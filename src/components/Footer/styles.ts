import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;//p manter a distancia superior
  border-top: 2px solid ${({theme})=> theme.backgroundLight}; //linha antes do footer
  height: 5rem;
  align-items: center;
  justify-content: center;

  >div{
    display: flex;
    align-items: center;
    justify-content: space-between; //para o conteudo ser separados(separar o btn e a section dos itens, linkedin, face..)

    button{
      background: none;
      border: none;
      color: ${({theme})=> theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }
    >section{
      display: flex;
      align-items: center;
      gap: 1rem;

      svg{
        width: 2rem;
        height: 2rem;
        color: ${({theme})=> theme.text};
        transition: .5s;
        cursor: pointer;

        &:hover{
          color:${({theme})=> theme.primary}
        }
      }
    }
  @media(max-width: 450px){
    button{
      font-size: .9rem;
    }
      >section{
        gap: .5rem;
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }


`;
