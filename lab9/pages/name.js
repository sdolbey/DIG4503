import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css';
import NameSearch from '../components/NameSearch';

const NamePage = () => (
    <div className={styles.container}>
        <div>
            <Head>
                <title>Name Search</title>
            </Head>
            <div>
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
        <div>
            <h1>Name Search</h1>
            <NameSearch />
            <div>
                <h2>Results</h2>
                <div id="reportingArea"></div>
            </div>
        </div>
    </div>
)

export default NamePage;
