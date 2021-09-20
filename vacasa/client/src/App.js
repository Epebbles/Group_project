import logo from './logo.svg';
import { Router } from '@reach/router';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import LoginReg from './views/LoginReg';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login"/>
        <Register path="register"/>
        <LoginReg path="loginreg"/>
      </Router>

    </div>
  );
}

export default App;
