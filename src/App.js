import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
          <Route exact path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route exact path={ROUTES.CONTACT} element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
