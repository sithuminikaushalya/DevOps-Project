import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import CreateOrder from './Components/CreateOrder';
import Loging from './Components/Loging';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import User from './Components/User';
import Orders from './Components/Orders';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={LandingPage} />
          <Route path="/add" exact component={CreateOrder} />
          <Route path="/login" exact component={Loging} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/user" exact component={User} />
          <Route path="/orders" exact component={Orders} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
