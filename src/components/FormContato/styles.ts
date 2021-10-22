import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width:100%;
`;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid ;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  >button{//estilo do btn
    border: none;
    padding: 1rem 2.5rem; //Margem superior e inferior de 1rem. Margem esquerda e direita de 2.5rem.
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: .5rem;
    background: ${({theme})=> theme.primary};
    transition: .5s;
    width: fit-content;//para o btn ficar do tamanho do conteudo aq no caso do tamanho do nome ENVIAR


    &:disabled{
      opacity: 0.5;
    }
    &:not(:disabled):hover{//ele seleciona quando n estiver desabilitado, dai ele faz esse hoover
      background: ${({theme})=> darken(0.10, theme.primary)};


    }
  }

  @media(max-width: 700px){
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media(max-width: 450px){
    >button{
      padding: .8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({theme})=> theme.inputBackground};
  border: 1px solid ${({theme})=> theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({theme})=> theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus{//quando tiver digitando no form
    border-color: ${({theme})=> theme.primary};
  }
  &::placeholder{
    color: ${({theme})=> theme.primary};
  }

  @media(max-width: 450px){
    padding: 1.4rem;
    font-size: 1rem;
  }

`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({theme})=> theme.inputBackground};
  border: 1px solid ${({theme})=> theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({theme})=> theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;//para n redimensionar o textarea

  grid-column: 1/3; //significa q ele vai ocupar da 1 coluna ate a 3coluna

  &:focus{//quando tiver digitando no form
    border-color: ${({theme})=> theme.primary};
  }
  &::placeholder{
    color: ${({theme})=> theme.primary};
  }

  @media(max-width: 700px){
    grid-column: 1;
  }
  @media(max-width: 450px){
    padding: 1.4rem;
    font-size: 1rem;
  }

`;
