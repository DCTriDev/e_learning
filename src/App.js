import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
