import Product from "./components/products/Product"
import Navbar from "./components/navbar/Navbar"
import './App.css';
import Products from "./components/products/Products"
import CheckoutPage from './components/checkoutpage/CheckoutPage'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signin/SignUp";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>

        <Route path="/signup">
          <SignUp />
        </Route>
      
        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/checkout-page">
          <CheckoutPage />
        </Route>

        <Route path="/">
          <Products />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
