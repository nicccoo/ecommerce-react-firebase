import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from './routes/routes'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
