import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/home";
import Page2 from "./Component/Home/page2";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <Page2/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
