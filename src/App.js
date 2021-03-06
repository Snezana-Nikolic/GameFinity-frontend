import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Product from "./components/products/Product";
import Home from "./pages/Home";
import User from "./pages/User";
import WishList from "./pages/WishList";
import Chat from "./pages/Chat";
import LogIn from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "./components/admin/Dashboard";
import { NotFound } from "./components/error/NotFound";
import { AuthContextProvider } from "./contexts/auth";
import Products from "./components/products/Products";
import SignUp from "./pages/SignUp";

const App = () => (
  <div className="App">
    <AuthContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/admin" component={Dashboard} />
            <PrivateRoute path="/product/:id" component={Product} />
            <PrivateRoute path="/chat" component={Chat} />
            <Route
              path="*"
              render={(props) => (
                <>
                  <Redirect to="/404" />
                  <NotFound {...props} />
                </>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  </div>
);

export default App;
