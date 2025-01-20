interface AuthFormProps<T extend FieldValues> {
  type: "sign-in" | "sign-up";
  schema: z.ZodType;
  defaultValues: any;
  onSubmit: (values: any) => void;
}

const AuthForm = ({ type, schema, defaultValues, onSubmit }: AuthFormProps) => {
  return <div>AuthForm</div>;
};

export default AuthForm;
