import { z } from "zod";
export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(3),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
