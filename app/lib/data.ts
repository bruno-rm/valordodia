import postgres from 'postgres';
import { Expenses } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function listExpenses() {
	const data = await sql<Expenses[]>`
    SELECT * FROM expenses;
  `;
	return data;
}

export async function fetchExpenseById(id: number) {
  try {
    const data = await sql<Expenses[]>`
      SELECT * FROM expenses      
      WHERE expenses.id = ${id};
    `;

    const expense = data.map((expense) => ({
      ...expense,      
    }));
    
    return expense[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch expense.');
  }
}