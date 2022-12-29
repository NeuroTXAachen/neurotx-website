import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
  <Layout>
    <div className="bg-white dark:bg-secondary dark:text-white">
    <Component {...pageProps} />
    </div>
  </Layout>
  )
}

export default MyApp
