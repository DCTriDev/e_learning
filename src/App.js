import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import LoadingAnim from "./Components/LoadingAnim";
import CourseManagement from "./Pages/CourseManagement";
import Search from "./Pages/Search";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div>
      <LoadingAnim />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/course-catalog/:maDanhMuc"
            render={({ match }) => {
              return <CourseCatalog maDanhMuc={match.params.maDanhMuc} />;
            }}
          />
          <Route exact path="/search/:input" component={Search} />
          <Route
            exact
            path="/dashboard/course-manage"
            render={({ match }) => {
              return <CourseManagement {...match} />;
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
