import type { ReactNode } from "react";
import { useAppSelector } from "@/store/hooks";

interface Props {
  children: ReactNode;
}

export default function PublicOnly({ children }: Props) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <div>Already logged in</div>;
  }

  return <>{children}</>;
}
