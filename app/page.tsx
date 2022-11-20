import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <p>nothing to see here.</p>
        <p>sometimes i <a href="https://twitter.com/rayhatfield">tweet</a>.</p>
        <p>i’m <a rel="me" href="https://mastodon.social/@rayhatfield">on mastodon</a> too.</p>
        <div className={styles.hidden}>
          <p>i have these other mastodon accounts too. still trying to figure out which is best.</p>
          <ul>
            <li><a rel="me" href="https://hachyderm.io/@raytheist">@raytheist@hachyderm.io</a></li>
            <li><a rel="me" href="https://mstdn.social/@rayh">@rayh@mstdn.social</a></li>
            <li><a rel="me" href="https://mastodon.online/@raytheist">@raytheist@mastodon.online</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
