import React from 'react';
import styles from '../../pages/Styles.module.css';

class TypeSearch extends React.Component {
    TypeSearchSubmit = () => {
        event.preventDefault();

        let element = document.querySelector("#type");

        fetch("/api/pokemon/type/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            this.props.callback(processed);
        })
    }

    render() {
        return(
            <div>
                <h2>Search by Type</h2>
                <input className={styles.textbox} id="type" type="text"/>
                <button className={styles.button} onClick={this.TypeSearchSubmit}>Search</button>
            </div>
        )
    }
}

export default TypeSearch;