import logo from './logo.svg';
import './App.css';
import SearchComponent from './SearchComponent';
import AdvancedOptionsComponent from './AdvancedOptionsComponent';
import GeneratedResponseComponent from './GeneratedResponseComponent';
import LinkListComponent from './LinkListComponent';

function App() {
  return (
    <div className="App">
      <h1>RAG SEARCH ENGINE PROJECT</h1>
      <div id="main-page" className="horizontal-align">
        <div id="empty-zone"></div>
        <div id="search-zone" className="vertical-align">
          <SearchComponent/>
          <AdvancedOptionsComponent/>
          <LinkListComponent/>
        </div>
        <div id="response-zone" className='vertical-align'>
          <GeneratedResponseComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
