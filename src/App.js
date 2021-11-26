import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Routes from './Routes';
import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  return (
    <BrowserRouter>
    <br />
    <div>
    {isLoggedIn && (
      <>
      <Link to="/">Home</Link>
    <br />
    <Link to="/Form">Form</Link>
    <br />
    <NavLink to="/Post" activeStyle={{ color: "red" }}>Post</NavLink>
    <br />
    <NavLink to="/About" activeClassName="about">About</NavLink>
    <br />
    <button onClick={logout}>LogOut</button>
      </>
    )}
      <Routes />
    </div>
    </BrowserRouter>
  );
}

export default App;