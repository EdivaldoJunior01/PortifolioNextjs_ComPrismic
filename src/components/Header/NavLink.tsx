import  { NavLinkContainer} from './styles'; /* estilizado em styles */
import {useRouter} from 'next/router'
import Link from 'next/link';

interface Props{ /* referencia onde chama la no index do header */
    title: string;
    path: string;
    includes?: boolean;
}

export default function NavLink ({title, path, includes = false}: Props){ /* recebe o titulo e o path que e para onde vai o link */
  /* includes =false p/ se eu n passar ele, por padrão vai ser falso */
  const router = useRouter();

  function verifyIfIsActive(){
    if(includes){
      return router.pathname.includes(path)/* se ele for mandado como true ele vai na router e usar o includes do js e vai passar o path */
    }
    return path === router.pathname; //se ele n for mandando ele vai retornar se a rota e exata
  }

  //const isActive = router.pathname ===path; /* basicamente so vai ficar ativo se ficar na rota path */
  const isActive =  verifyIfIsActive(); //isactive sera o retorno da função
  console.log(router.pathname)
  return(
    <NavLinkContainer isActive={isActive}> {/* isActive vai para o css */}
      <Link href={path}>
      <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
}
