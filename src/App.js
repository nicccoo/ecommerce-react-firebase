import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.PRODUCTS} element={<Products />} />
          <Route exact path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
