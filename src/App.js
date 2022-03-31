import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import LoadingAnim from "./Components/LoadingAnim";

function App() {
    return (
        <div>
            <LoadingAnim/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path='/course-catalog/:maDanhMuc' render={({match}) => {
                        return <CourseCatalog maDanhMuc={match.params.maDanhMuc}/>
                    }}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
