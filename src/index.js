import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../src/contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import { CartItemProvider } from "./contexts/Cart-item.context";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Now i have access to my context inside all children in  app */}
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <CartItemProvider>
              <App />
            </CartItemProvider>
          </CartProvider>
        </ProductsProvider>

      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
