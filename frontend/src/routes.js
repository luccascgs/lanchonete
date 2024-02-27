import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
const LoginPage = () => <Login />;
const AppPage = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <MainPage />;
};
const Rotas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/app" element={<AppPage />} />
    </Routes>
  </Router>
);
export default Rotas;
