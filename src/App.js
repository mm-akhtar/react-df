import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import AuthContext from "./store/authContext";

function App() {
  const ctx = useContext(AuthContext);
  const outHandler = async (props) => {
    try {
      await ctx.onLogout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Router>
      <div className="App,">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{!ctx.isLoggedIn && <Link to="/signup">SignUp</Link>}</li>
            <li>{!ctx.isLoggedIn && <Link to="/login">LogIn</Link>}</li>
            <li>{ctx.isLoggedIn && <Link to="/profile">Profile</Link>}</li>
            <li>
              {ctx.isLoggedIn && (
                <Link to="/" className="main-nav" onClick={outHandler}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
