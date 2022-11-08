import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ray.wtf</title>
        <meta name="description" content="ray hatfield's personal site. web development and stuff." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/704534/7134372/css/fonts.css" />
      </Head>

      <main className={styles.main}>
        <p>nothing to see here.</p>
        <p>sometimes i <a href="https://twitter.com/rayhatfield">tweet</a>.</p>
        <p>i’m <a rel="me" href="https://mastodon.social/@rayhatfield">on mastodon</a> too.</p>
      </main>
    </div>
  )
}
