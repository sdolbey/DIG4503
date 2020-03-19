import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";

const Home = () => {
  return (
    <div>
      <h1>Gotta catch 'em all!</h1>
      <NameSearch/>
      <IdSearch/>
      <div>
        <h2>Results</h2>
        <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Home;
