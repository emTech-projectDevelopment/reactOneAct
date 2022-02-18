//import logo from './logo.svg';
import './App.css';
import './CalculatorApp.css';
//import {Dog} from './Dog'
//import {UsingApi} from './UsingApi'
import {Calculator} from './CalculatorApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*This is the React activity>>> <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dog/> */}
        {/*This is UsingApi Project>>>  <UsingApi/>*/}
        <Calculator/>{/* This is the CalculatorApp */}
      </header>
    </div>
  );
}

export default App;
