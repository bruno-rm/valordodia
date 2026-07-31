import { deleteExpense } from "./actions";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export function UpdateExpense({ id }: { id: number }) {
  return (
    <Link
      href={`/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteExpense({ id }: { id: number }) {
  const deleteExpenseWithId = deleteExpense.bind(null, id);
  return (
    <form action={deleteExpenseWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

