import { ThemeProvider } from 'styled-components';

import NextNProgress from 'nextjs-progressbar';//biblioteca para o delay de progresso no carregamento da pag

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';/* tema global de todo css da pag */
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
     <NextNProgress  //pra passar uma expereciencia q na hora do lag da pag p/ outra ela esta sendo carregada
        color={theme.primary}
        startPosition={0.3} //onde a barrinha começa
        stopDelayMs={200} //tempo dela parar ate sumi
        height={3}
        showOnShallow
     />

      <Toaster position="bottom-right"/>{/*mensagem aparece posição baixo, direita, canto inferior direito */}
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
