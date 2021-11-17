import type { GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`./locales/${locale}.json`);

  return {
    props: {
      lngDict: language.default,
      locale
    },
  };
};

const Home: NextPage = ({lngDict, locale}:Params) => {
  const arrow = <span dangerouslySetInnerHTML={{ __html: lngDict.arrow }}></span>
  return (
    <div className={styles.container}>
      <Head>
        <title>{lngDict.name.title}</title>
        <meta name="description" content={lngDict.name.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {lngDict.name.title}
        </h1>
        <h1 className={styles.title}>
        {lngDict.name.sub}
        </h1>

        <p className={styles.description}>
        {lngDict.name.desc}
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>{lngDict.main.aboutUs} {arrow}</h2>
            <p>Who are we, what do we do.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>{lngDict.main.blog} {arrow}</h2>
            <p>Read technical blogs written by our members and contributers</p>
          </a>

       
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
