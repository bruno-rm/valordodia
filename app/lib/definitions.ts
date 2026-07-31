import { z } from "zod";


export type Expenses = {
  id: number;
  description: string;
  value: string;
  day: number;
  month: number;
  created_at: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),

  email: z
    .email("Invalid email")
    .max(100, "Email too long"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long"),
});

export type SignupInput = z.infer<typeof signupSchema>;
 