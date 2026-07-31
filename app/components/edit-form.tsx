"use client";

import { updateExpense } from "@/app/lib/actions";
import Link from "next/link";
import { Expenses } from "@/app/lib/definitions";



export default function EditForm({expense}: {expense: Expenses}) {
  
  const updateExpenseWithId = updateExpense.bind(null, expense.id);
  return (
    <form
      action={updateExpenseWithId}
      
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md space-y-4 mt-5"
    > 

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Edit Expense</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          name="description"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          defaultValue={expense.description}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Value
        </label>
        <input
          type="number"
          name="value"
          step="0.01"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          defaultValue={expense.value}
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Day
          </label>
          <input
            type="number"
            name="day"
            min="1"
            max="31"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue={expense.day}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Month
          </label>
          <input
            type="number"
            name="month"
            min="1"
            max="12"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue={expense.month}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
      >
        Edit
      </button>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
        <Link href="/"> Cancel </Link>
      </button>
    </form>
    
  );
}
