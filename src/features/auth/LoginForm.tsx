import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/slices/authSlice";
import { login } from "@/services/auth";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FloatingInput from "@/components/ui/FloatingInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = async (payload: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    try {
      const res = await login({
        email: payload.email,
        password: payload.password,
      });

      const { user, token } = res.data;

      dispatch(loginSuccess({ user, token }));
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin({ email, password, remember });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full h-[220px] lg:gap-5 lg:h-[232px]"
    >
      {/* Email */}
      <FloatingInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password */}
      <FloatingInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Remember me */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember"
          checked={remember}
          onCheckedChange={(v) => setRemember(Boolean(v))}
        />
        <Label htmlFor="remember" className="cursor-pointer">
          Remember me
        </Label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="h-[48px] rounded-full bg-[#C12116] text-[16px]/[30px]"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "@/store/slices/authSlice";
// import { login } from "@/services/auth";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = async (payload: { email: string; password: string }) => {
//     try {
//       const res = await login(payload);

//       const { user, token } = res.data;

//       dispatch(loginSuccess({ user, token }));

//       // redirect after login
//       navigate("/", { replace: true });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form
//       action="submit"
//       className="flex flex-col gap-4 w-full h-[220px] lg:gap-5 lg:h-[232px]"
//     >
//       <input
//         id="email"
//         type="email"
//         placeholder="Email"
//         className="p-1 border py-2 px-3 border-[#D5D7DA] rounded-md"
//       />
//       <input
//         id="password"
//         type="password"
//         placeholder="Password"
//         className="p-1 border py-2 px-3 border-[#D5D7DA] rounded-md"
//       />
//       <div className="gap-2">
//         <input id="remember" type="checkbox" />{" "}
//         <label htmlFor="remember">Remember me</label>
//       </div>
//       <button
//         onClick={() =>
//           handleLogin({
//             email: "...",
//             password: "...",
//           })
//         }
//         className="flex justify-center items-center p-2 w-full h-[48px] rounded-full bg-[#C12116] text-white text-[16px]/[30px]"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
