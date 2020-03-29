import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css';
import TypeSearch from '../components/TypeSearch';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "table": []
        };
    }

    setResults = (processed) => {
        console.log(processed);
        return(this.setState({"table": processed}))
    }

    createTable() {
        console.log(this.state.table);
        return(
            <table>
                <tbody>
                {
                this.state.table.map((entry, index) => {
                    return( 
                    <tr key={index}>
                        <td>{entry.id}</td>
                        <td>{entry.name}</td>
                    </tr>
                    );
                })
                }
                </tbody>
            </table>
        )
    }

    render() {
        return(
            <div className={styles.container}>
                <div>
                    <Head>
                        <title>Type Search</title>
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
                    <h1>Type Search</h1>
                    <TypeSearch callback={this.setResults} />
                    {this.createTable()}
                </div>
            </div>
        )
    }
}

export default App;
