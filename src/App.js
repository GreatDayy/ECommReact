import Home from "./routes/Home/Home.component";
import Navigation from "./components/Navigation/Navigation.component";
import Auth from "./components/Authentication/Authentication.component";
import Shop from "./components/Shop/Shop.component";
import { Routes, Route} from "react-router-dom";
import CartCheckout from "./components/Cart-checkout/Cart-checkout";

const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="Shop" element={<Shop />}></Route>
        <Route path="Auth" element={<Auth/>}></Route>
        <Route path="Checkout" element={<CartCheckout/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
