import { Provider } from 'react-redux'
import Layout from '../styles/Layout'
import Header from '../components/header/Header'
import store from '../store'
import '../components/header/header.scss';
import '../components/kivi/kivi.scss';
import '../components/projectsLanding/projects.scss';

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
     <Layout>
      <Header />
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
