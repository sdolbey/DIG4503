import React from 'react';
import NameSearch from './components/NameSearch';
import IdSearch from './components/IdSearch';
import Result from './components/Result';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.setResults = this.setResults.bind(this);

    this.state = {
      id: "000",
      name: "???",
      types: []
    }
  }

  setResults(results) {
    this.setState({ id: results.id.toString(), name: results.name, types: results.typeList});
    console.log(this.state);
  }

  render() {
    const images = require.context('../public/img/sprites', true);
    let icon = images(`./${this.state.id}MS.png`);
    return (
      <div className="container">
        <div className="row">
          <div className="u-full-width title">
            <h1>Pokémon!</h1>
          </div>
        </div>
        <hr/>
        <div className="row">
          <h2>Search</h2>
        </div>
        <div className="row">
          <IdSearch setResults={this.setResults} />
          <NameSearch setResults={this.setResults} />
        </div>
        <hr/>
        <div className="row">
          <h2>Result</h2>
          <div id="reportingArea"></div>
          <Result 
            icon={icon}
            id={this.state.id}
            name={this.state.name}
            types={this.state.types}
          />
        </div>
      </div>
    );
  }
}

export default App;
