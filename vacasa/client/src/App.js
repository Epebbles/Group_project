
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import LoginReg from './views/LoginReg';
import VacasaMain from './views/VacasaMain';
import EditRental from './components/EditRental';
import Details from './components/Details';
import RentalDetails from './views/RentalDetails';
import Edit from './views/Edit';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/login"/>
        <Register path="/register"/>
        <LoginReg path="/loginreg"/>
        <VacasaMain default path="/vacasa"/>
        <EditRental path="/vacasa/edit/:vacasaId"/>
        <Edit path="/vacasa/:vacasaId/edit"/>
        {/* <RentalDetails path="/vacasa/:id"/> */}
        <Details path="/vacasa/:id"/>
      </Router>

    </div>
  );
}

export default App;
