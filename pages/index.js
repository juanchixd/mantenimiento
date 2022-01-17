import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (<div className = {styles.container}>
            <Layout home>
              <Head>
                <title> {siteTitle} </title> </Head> 
              <section className = { utilStyles.headingMd } >
            <p> Pagina en mantenimiento. Disculpe las molestias. </p>
        </section>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://github.com/juanchixd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juan Gonzalez --
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  )
}