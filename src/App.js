import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import LoadingAnim from "./Components/LoadingAnim";
import CourseDetail from "./Pages/CourseDetail";
import Search from "./Pages/Search";

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
                    <Route exact path='/course-detail/:courseID' render={({match}) => {
                        return <CourseDetail courseID={match.params.courseID}/>
                    }}/>
                    <Route exact path='/search/:input' component={Search} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
