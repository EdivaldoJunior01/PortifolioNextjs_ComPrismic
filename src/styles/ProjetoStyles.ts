import styled from "styled-components";

export const ProjetosContainer  = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  >main{
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);//quantas colunas o grid vai ter no caso 4 colunas
    gap: 1.5rem;

    @media(max-width: 1000px){
      grid-template-columns: 1fr 1fr;//2 colunas
    }
    @media(max-width: 550px){
      grid-template-columns: 1fr; //1coluna
    }
  }
`;
