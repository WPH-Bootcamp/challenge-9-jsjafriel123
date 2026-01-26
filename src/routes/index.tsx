import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";
import LoginPage from "@/features/auth/LoginPage";
import HomePage from "@/pages/HomePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
