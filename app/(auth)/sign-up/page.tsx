"use client";
import AuthForm from "@/components/auth-form";
import { signUp } from "@/lib/actions/auth";
import { SignUpSchema } from "@/lib/validations";

const SingUpPage = () => (
  <AuthForm
    type="sign-up"
    schema={SignUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      universityId: 0,
      universityCard: "",
      password: "",
    }}
    onSubmit={signUp}
  />
);

export default SingUpPage;
