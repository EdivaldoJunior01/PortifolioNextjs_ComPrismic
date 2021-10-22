import { ReactNode } from 'react'
import {ContainerConhecimento} from './styles'

interface ConhecimentoProps{
  title: string;
  icon: ReactNode; //ReactNode e qualquer item react valido pode ser um component, html etc..
}

export default function ConhecimentoItem({title, icon}: ConhecimentoProps){
  return(
    <ContainerConhecimento data-aos="fade-up">{/* aos animação importada no index principal */}
      <p>{title}</p>
      {icon}
    </ContainerConhecimento>
  )
}
