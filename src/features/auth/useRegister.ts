import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/auth";
import { toast } from "sonner";
import type { AuthData, RegisterPayload } from "@/types/auth";
import type { ApiResponse } from "@/types/api";

export const useRegister = () =>
  useMutation<ApiResponse<AuthData>, any, RegisterPayload>({
    mutationFn: register,
    onSuccess: (res) => {
      if (res.success) {
        toast.success("Registration successful");
      } else {
        toast.error(res.message);
      }
    },
    onError: (err: any) => {
      toast.error(err.message);

      if (err.errors?.length) {
        err.errors.forEach((e: string) => toast.error(e));
      }
    },
  });
