"use client";

import AuthForm from "@/components/auth-form";
import { SignInSchema } from "@/lib/validations";

const SingInPage = () => {
  return (
    <AuthForm
      type="sign-in"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={() => {}}
    />
  );
};

export default SingInPage;
