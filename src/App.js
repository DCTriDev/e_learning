import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import UserDetail from "./Pages/UserDetail/UserDetail";
import LoadingAnim from "./Components/LoadingAnim/index";
function App() {
  return (
    <div>
      {/* <LoadingAni */}
      <LoadingAnim />
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
