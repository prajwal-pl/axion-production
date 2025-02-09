import AuthProvider from "@/components/global/auth-provider";
import { SignUpForm } from "@/components/global/signup-form";

export const SignUp = () => {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center h-screen w-full">
        <SignUpForm />
      </div>
    </AuthProvider>
  );
};
