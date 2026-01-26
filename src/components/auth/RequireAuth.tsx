import type { ReactNode } from "react";
import { useAppSelector } from "@/store/hooks";

interface Props {
  children: ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <div>Please login first</div>;
  }

  return <>{children}</>;
}
