
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path={"/register"} element={<Register />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
