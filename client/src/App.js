import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/home";
import Page2 from "./Component/Home/page2";
import Goals from "./Component/Goals/goals";
import Signup from "./Component/Signup/signup";
import Login from "./Component/Login/login";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/page2'>
            <Page2/>
          </Route>

          <Route exact path='/goals'>
            <Goals/>
          </Route>

          <Route exact path='/signup'>
            <Signup/>
          </Route>

          <Route>
            <Login/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
