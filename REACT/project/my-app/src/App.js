// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import PDP from "./components/PDP";
import PLP from "./components/PLP";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/products" exact component={PLP} />
        <Route path="/products/:id" exact component={PDP} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          component={() => {
            <h1>404</h1>;
          }}
        ></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
