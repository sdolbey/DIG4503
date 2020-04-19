import React from 'react';
import RecentSearches from '../RecentSearches';

class NameSearch extends React.Component {

    constructor(props) {
        super(props);

        this.readId = this.readId.bind(this);
        this.recentSearch = this.recentSearch.bind(this);

        this.state = {
            searches: []
        }
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
                console.log(processed + " in readId");
                this.state.searches.push(processed);
                reporting.innerHTML = "";
                this.props.setResults(processed);
            }
        })
    }

    recentSearch(search) {
        fetch("http://localhost:80/id/" + search.id).then((res) => {
            return res.json();
        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                console.log(processed + " in recentSearch");
                reporting.innerHTML = "";
                this.props.setResults(processed);
            }
        })
    }

    render() {
        return(
            <div className="one-half column">
                <p className="sectionTitle">By National Pokédex number</p>
                <form onSubmit={this.readId}>
                    <input id="id" type="text"/>
                    <button>Search</button>
                </form>
                <RecentSearches searches={this.state.searches} recentSearch={this.recentSearch}/>
            </div>
        )
    }
}

export default NameSearch;