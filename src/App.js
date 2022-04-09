import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import UserDetail from "./Pages/UserDetail/UserDetail";
import LoadingAnim from "./Components/LoadingAnim";
import Layout, { Layout2, Layout3 } from "./Layouts";

function App() {
  return (
    <div>
      <LoadingAnim />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
