import React from 'react';
import styles from '../../pages/Styles.module.css';

class NameSearch extends React.Component {
    readId(event) {
        event.preventDefault();

        let element = document.querySelector("#id");

        fetch("/api/pokemon/id/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        })
    }

    render() {
        return(
            <div>
                <h2>Search by ID</h2>
                <form onSubmit={this.readId}>
                    <input className={styles.textbox} id="id" type="text"/>
                    <button className={styles.button}>Search</button>
                </form>
            </div>
        )
    }
}

export default NameSearch;