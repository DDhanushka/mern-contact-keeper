import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import { Navbar } from "./components/layouts/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Alerts } from "./components/layouts/Alerts";
import ContactState from "./context/contact/ContactState";
import AuthtState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <AuthtState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthtState>
  );
}

export default App;
