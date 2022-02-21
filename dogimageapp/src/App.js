import logo from './logo.svg';
import './App.css';
//import './CalculatorApp.css';
import {Dog} from './Dog'
//import {UsingApi} from './UsingApi'
//import {Calculator} from './CalculatorApp';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dog/>   {/*<<<This is the React activity>>>*/}

        {/*<UsingApi/>   {/*<<<This is UsingApi Project*/}

        {/*<Calculator/>   {/*<<<This is the CalculatorApp */}

    </div>
  );
}

export default App;
