import React from 'react';

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();

        let element = document.querySelector("#name");

        fetch("http://localhost:80/name/" + element.value).then((res) => {
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
            <div className="one-half column">
                <h2>Search by Name</h2>
                <form onSubmit={this.readName}>
                    <input id="name" type="text"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default NameSearch;