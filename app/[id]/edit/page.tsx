import EditForm from '@/app/components/edit-form';
import { notFound } from 'next/navigation';
import { fetchExpenseById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const id = params.id;
  const [expense] = await Promise.all([
    fetchExpenseById(id),    
  ]);
  
  if (!expense) {
    notFound();
  }

  return (
    <main>
      <EditForm expense={expense} />
    </main>
  );
}
