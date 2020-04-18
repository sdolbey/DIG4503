import React from 'react';

class NameSearch extends React.Component {

    constructor(props) {
        super(props);

        this.readName = this.readName.bind(this);
    }

    readName(event) {
        event.preventDefault();

        let element = document.querySelector("#name");
        
        let str = element.value.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        let query = str.join(" ");


        fetch("http://localhost:80/name/" + query).then((res) => {
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