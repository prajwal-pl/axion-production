import AuthProvider from "@/components/global/auth-provider";
import { LoginForm } from "@/components/global/login-form";

export const SignIn = () => {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center h-screen w-full">
        <LoginForm />
      </div>
    </AuthProvider>
  );
};
