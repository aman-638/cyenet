import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ListPage from "./pages/ListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<DashboardPage />} />}
        />
        <Route path="/list" element={<PrivateRoute element={<ListPage />} />} />
        <Route
          path="/list/details"
          element={<PrivateRoute element={<ItemDetailsPage />} />}
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
