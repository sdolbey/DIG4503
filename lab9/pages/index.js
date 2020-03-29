import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.container}>
      <p className={styles.welcome}>
        Welcome! Choose your search method:
      </p>
      <div className={styles.nav}>
        <Link href="/id"><a>ID Search</a></Link>
        <Link href="/name"><a>Name Search</a></Link>
        <Link href="/type"><a>Type Search</a></Link>
      </div>
    </div>
  </div>
)

export default Home;
