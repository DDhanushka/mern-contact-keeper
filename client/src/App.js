import "./App.css";
import { Navbar } from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthtState from "./context/auth/AuthState";

function App() {
  return (
    <AuthtState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthtState>
  );
}

export default App;
