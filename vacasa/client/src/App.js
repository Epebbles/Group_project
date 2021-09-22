
import { Router } from '@reach/router';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import LoginReg from './views/LoginReg';
import VacasaMain from './views/VacasaMain';
import EditRental from './components/EditRental';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="login"/>
        <Register path="register"/>
        <LoginReg path="loginreg"/>
        <VacasaMain path="/api/vacasa"/>
        <EditRental path="/api/vacasa/:vacasaId/edit"/>
      </Router>

    </div>
  );
}

export default App;
