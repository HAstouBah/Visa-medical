import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produits from "./pages/Produits";
import Historiques from "./pages/Historiques";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/produits" element={<Produits />} />
          <Route path="/historiques" element={<Historiques />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
