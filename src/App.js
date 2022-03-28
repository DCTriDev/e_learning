import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import UserDetail from "./Pages/UserDetail/UserDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
