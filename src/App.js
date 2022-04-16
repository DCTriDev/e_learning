import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import CourseCatalog from "./Pages/CourseCatalog";
import LoadingAnim from "./Components/LoadingAnim";
import UserManagement from "./Pages/userManagement";
import { ModalUser } from "./Pages/userManagement/ModalUser/MoadalUser";

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
          <Route exact path="/UserManagement" component={UserManagement} />
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
