import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  >main { /* main feita diretamente dentro dela, ou seja n vai afetar as filhas */
    display: flex;
    flex-direction: column;
    gap: 8rem;/* espaçamento entre os conteudos */
  }
`;
