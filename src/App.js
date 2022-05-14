import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import CourseCatalog from "./Pages/CourseCatalog";
import UserDetail from "./Pages/UserDetail";
import LoadingAnim from "./Components/LoadingAnim";
import Search from "./Pages/Search";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import {ModalUser} from "./Pages/userManagement/ModalUser";
import Blog from "./Pages/Blog";
import CourseDetail from "./Pages/CourseDetail";
import Notfound from "./Pages/Notfound";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";

function App() {
    return (<div>
        <LoadingAnim/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/course-detail/:courseID" component={CourseDetail}/>
                <Route exact path="/course-catalog/:maDanhMuc"
                    render={({match}) => {
                        return <CourseCatalog maDanhMuc={match.params.maDanhMuc}/>;
                    }}
                />
                <Route exact path="/search/:input" component={Search}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route
                    exact
                    path="/UserManagement/themNguoiDung"
                    render={({match}) => {
                        return <ModalUser {...match} />;
                    }}
                />
                <Route
                    exact
                    path="/UserManagement/chinhSuaThongTinNguoiDung"
                    render={({ match }) => {
                      return <ModalUser {...match} />;
                    }}
                  />
                <Route
                    exact
                    path="/profile"
                    render={({match}) => {
                        return <UserDetail match={match}/>;
                    }}
                />
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/events" component={Events}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
    </div>);
}

export default App;
