"use client";

import AuthForm from "@/components/auth-form";
import { signInWithCredentials } from "@/lib/actions/auth";
import { SignInSchema } from "@/lib/validations";

const SingInPage = () => {
  return (
    <AuthForm
      type="sign-in"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SingInPage;
