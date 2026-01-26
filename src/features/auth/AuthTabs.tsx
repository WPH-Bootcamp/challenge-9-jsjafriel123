import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => setTab(v as any)}
      className="w-full max-w-sm"
    >
      <TabsList className="grid grid-cols-2 w-full rounded-lg bg-gray-100 p-1">
        <TabsTrigger
          value="signin"
          className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
        >
          Sign in
        </TabsTrigger>

        <TabsTrigger
          value="signup"
          className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow"
        >
          Sign up
        </TabsTrigger>
      </TabsList>

      {/* Sign in */}
      <TabsContent value="signin" className="mt-6">
        <LoginForm />
      </TabsContent>

      {/* Sign up */}
      <TabsContent value="signup" className="mt-6">
        <RegisterForm onSuccess={() => setTab("signin")} />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
