import { lighten } from 'polished';
import styled from 'styled-components';

interface isActive { /* fznd uma propriedade */
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul{
    display: flex;
    gap: 2rem;/* espaçamento entre elas */
    align-items: center;
  }
`;
export const NavLinkContainer = styled.li<isActive> ` /*P/ PSSAR A PROP CRIADA ABRE <MAISONOME>*/
  a{
    text-transform: uppercase;
    color: ${(props) => props.isActive ? props.theme.primary : props.theme.textHighlight} ;/* ?= se tiver ativo vai essa cor : = senão vai essa */
    transition: 0.5s;

    &:hover{
      color : ${props =>
    props.isActive
      ? lighten(0.2, props.theme.primary)
      : lighten(0.2, props.theme.textHighlight)}

    }
  }
`;


