import React from 'react';

class NameSearch extends React.Component {
    readId(event) {
        event.preventDefault();

        let element = document.querySelector("#id");

        fetch("http://localhost:80/id/" + element.value).then((res) => {
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
                <h2>Search by ID</h2>
                <form onSubmit={this.readId}>
                    <input id="id" type="text"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default NameSearch;