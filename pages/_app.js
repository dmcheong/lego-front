import MainLayout from '../layout/MainLayout';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return ( 
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  )
}

export default MyApp
