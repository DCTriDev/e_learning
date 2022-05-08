import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import CourseCatalog from "./Pages/CourseCatalog";
import UserDetail from "./Pages/UserDetail/UserDetail";
import LoadingAnim from "./Components/LoadingAnim";
import Search from "./Pages/Search";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import {ModalUser} from "./Pages/userManagement/ModalUser";
import Blog from "./Pages/Blog";

function App() {
    return (
        <div>
            <LoadingAnim/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
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
                    {/* <Route exact path="/profile" component={UserDetail} /> */}
                    <Route
                        exact
                        path="/course-catalog/:maDanhMuc"
                        render={({ match }) => {
                            return <CourseCatalog maDanhMuc={match.params.maDanhMuc} />;
                        }}
                    />
                    {/* <Layout2 path="/profile" Component={UserDetail} /> */}
                    <Route
                        path="/profile"
                        render={({ match }) => {
                            return <UserDetail match={match} />;
                        }}
                    />
                    <Route
                        exact
                        path="/blog"
                        render={({ match }) => {
                            return <Blog {...match} />;
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
