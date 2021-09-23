
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
        <Login path="/login"/>
        <Register path="/register"/>
        <LoginReg default path="/loginreg"/>
        <VacasaMain path="/vacasa"/>
        <EditRental path="/vacasa/:vacasaId/edit"/>
      </Router>

    </div>
  );
}

export default App;
