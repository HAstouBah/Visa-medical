import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Produits from "./pages/Produits";
import Historiques from "./pages/Historiques";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/produits" element={<Produits />} />
          <Route path="/historiques" element={<Historiques />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
