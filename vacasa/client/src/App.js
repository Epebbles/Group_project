
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import LoginReg from './views/LoginReg';
import VacasaMain from './views/VacasaMain';
import Details from './components/Details';
import RentalDetails from './views/RentalDetails';
import Edit from './views/Edit';
import EditR from './components/EditR';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/login"/>
        <Register path="/register"/>
        <LoginReg path="/loginreg"/>
        <VacasaMain default path="/vacasa"/>
        <Edit path="/edit" />
        <EditR path="/vacasa/:id/edit"/>
        {/* <RentalDetails path="/vacasa/:id"/> */}
        <Details path="/vacasa/:id"/>
      </Router>

    </div>
  );
}

export default App;
