import Product from "./components/products/Product"
import Navbar from "./components/navbar/Navbar"
import './App.css';
import Products from "./components/products/Products"
import CheckoutPage from './components/checkoutpage/CheckoutPage'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>

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
