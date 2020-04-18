import React from 'react';

class NameSearch extends React.Component {

    constructor(props) {
        super(props);

        this.readId = this.readId.bind(this);
    }

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
                console.log(processed);
                //reporting.innerHTML = processed.name;
                this.props.setResults(processed);
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