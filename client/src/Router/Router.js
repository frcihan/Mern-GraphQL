import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ForgotPassword from "../pages/ForgotPassword";
import BookDetail from "../pages/BookDetail";
import BookList from "../pages/BookList";
import Navbar from "../components/header/Navbar";
import Footer from "../components/Footer/Footer";
import { Layout } from "antd";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

const { Content } = Layout;

function AppRouter() {
  // const { currentUser } = useContext(FirebaseAuthContext);
  const currentUser = "sdf";
  return (
    <Router>
      <Navbar />
      <Content>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/books:id" component={BookDetail} />
          <Route
            exact
            path="/profile"
            component={currentUser ? Dashboard : Signin}
          />
          <Route
            exact
            path="/cart"
            component={currentUser ? Cart : Signin}
          />
          <Route path="/" component={Main} />
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
}

export default AppRouter;
