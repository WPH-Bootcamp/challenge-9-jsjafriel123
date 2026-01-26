import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { login } from "@/services/auth";
import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/authSlice";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: login,

    onSuccess: (res) => {
      if (res.success && res.data) {
        dispatch(loginSuccess(res.data));
        toast.success("Login successful");
      } else {
        toast.error(res.message);
      }
    },

    onError: (err: any) => {
      toast.error(err.message ?? "Login failed");
    },
  });
};
