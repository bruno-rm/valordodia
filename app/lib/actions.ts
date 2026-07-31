"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
// import { Expenses } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// export type State = {
//   errors?: {
//     customerId?: string[];
//     amount?: string[];
//     status?: string[];
//   };
//   message?: string | null;
// };

// prevState: State,

// type State = {
//   message: string;
// };

export async function createExpense(
  prevState: { message: string },
  formData: FormData,
) {
  const description = formData.get("description")?.toString();
  const value = Number(formData.get("value"));
  const day = Number(formData.get("day"));
  const month = Number(formData.get("month"));

  if (
    !description ||
    Number.isNaN(value) ||
    Number.isNaN(day) ||
    Number.isNaN(month)
  ) {
    throw new Error("Invalid form data");
  }

  try {
    await sql`
      INSERT INTO expenses (description, value, day, month)
      VALUES (${description}, ${value}, ${day}, ${month})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  console.log(description);

  revalidatePath("/");
  redirect("/");
}

export async function updateExpense(
  id: number,
  formData: FormData,
): Promise<void> {
  const description = formData.get("description")?.toString();
  const value = Number(formData.get("value"));
  const day = Number(formData.get("day"));
  const month = Number(formData.get("month"));

  if (
    !description ||
    Number.isNaN(value) ||
    Number.isNaN(day) ||
    Number.isNaN(month)
  ) {
    throw new Error("Invalid form data");
  }

  try {
    await sql`
        UPDATE expenses
        SET description = ${description}, value = ${value}, day = ${day}, month = ${month}
        WHERE id = ${id}
      `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return;
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteExpense(id: number) {
  await sql`DELETE FROM expenses WHERE id = ${id}`;
  revalidatePath("/");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}