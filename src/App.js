import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import RegistrationForm from './RegistrationForm'
import Footer from './Footer'
import Hobbies from './Hobbies';
import LoginPage from './LoginPage';
import CounterComp from './CounterComp';
import Native from './Native';
// Importing the the Login page
function App() {
  return (
    <div className='App'>
      <Menu></Menu>
      <RegistrationForm></RegistrationForm>
      <Hobbies></Hobbies>
      <Native></Native>
      <LoginPage></LoginPage>
      <CounterComp></CounterComp>
      <Footer></Footer>

    </div>
    
  );
}

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

export default App;
