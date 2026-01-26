import LoginPage from "@/features/auth/LoginPage";
import RequireAuth from "@/components/auth/RequireAuth";
import PublicOnly from "@/components/auth/PublicOnly";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import LandingPage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes"; // index.tsx

// function Dashboard() {
//   const dispatch = useAppDispatch();

//   return (
//     <>
//       <div className="p-6">Dashboard (Protected)</div>;
//       <button onClick={() => dispatch(logout())} className="border px-4 py-2">
//         Logout
//       </button>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* <PublicOnly>
        <LoginPage />
      </PublicOnly> */}
      {/* <LandingPage /> */}
      {/* <RequireAuth>
        <Dashboard />
      </RequireAuth> */}
    </>
  );
}
