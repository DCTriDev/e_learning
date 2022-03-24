import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
