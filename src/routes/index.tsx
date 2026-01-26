import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";
import LoginPage from "@/features/auth/LoginPage";
import HomePage from "@/pages/HomePage";
import RestaurantPage from "@/pages/RestaurantPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="restaurant/:id" element={<RestaurantPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
