import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import LoadingAnim from "./Components/LoadingAnim";
import Search from "./Pages/Search";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import {ModalUser} from "./Pages/userManagement/ModalUser";

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
                    <Route exact path='/search/:input' component={Search} />
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route
                        exact
                        path="/UserManagement/themNguoiDung"
                        render={({ match }) => {
                            return <ModalUser {...match} />;
                        }}
                    />
                    <Route
                        exact
                        path="/UserManagement/chinhSuaThongTinNguoiDung"
                        render={({ match }) => {
                            console.log("match", match);
                            return <ModalUser {...match} />;
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
