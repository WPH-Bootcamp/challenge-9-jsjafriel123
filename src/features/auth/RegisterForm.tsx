import { useState } from "react";
import FloatingInput from "@/components/ui/FloatingInput";
import { Button } from "@/components/ui/button";
import { useRegister } from "./useRegister";
import type { RegisterPayload } from "@/types/auth";

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { mutate, isPending } = useRegister();

  const handleRegister = async (payload: RegisterPayload) => {
    mutate(payload, {
      onSuccess: (res) => {
        if (res.success) {
          onSuccess();
        }
      },
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister({ name, email, phone, password });
  };

  // Password Validation
  const showMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const canSubmit =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full h-[354px] lg:gap-5 lg:h-[428px]"
    >
      {/* Name */}
      <FloatingInput
        type="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Email */}
      <FloatingInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Phone */}
      <FloatingInput
        type="phone"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {/* Password */}
      <FloatingInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Confirm Password */}
      <FloatingInput
        type="password"
        label={showMismatch ? "Not match" : "Confirm Password"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={
          showMismatch ? "border-red-500 focus-visible:ring-red-500" : ""
        }
      />

      {/* Submit */}
      <Button
        type="submit"
        disabled={!canSubmit && isPending}
        className="h-[48px] rounded-full bg-[#C12116] text-[16px]/[30px]"
      >
        {isPending ? "Creating account..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
