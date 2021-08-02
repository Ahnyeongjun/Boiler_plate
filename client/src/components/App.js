
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import LandingPage from "./views/LandingPage/LandingPage"
function App() {
  return (
    <Router>
      <div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;

