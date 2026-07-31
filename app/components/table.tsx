import { listExpenses } from "@/app/lib/data";
import { DeleteExpense, UpdateExpense } from "@/app/lib/buttons";

export default async function Table() {
  const data = await listExpenses();
  return (
    
    <div className=" w-full max-w-md">
      <table className="shadow-md border border-gray-200  ">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-3 font-semibold">Description</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold">Day</th>
            <th className="px-4 py-3 font-semibold">Month</th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={`border-t hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2 text-black">{item.description}</td>
                <td className="px-4 py-2 text-black">{item.value}</td>
                <td className="px-4 py-2 text-black">{item.day}</td>
                <td className="px-4 py-2 text-black">{item.month}</td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex  gap-3">
                    <UpdateExpense id={item.id} />
                    <DeleteExpense id={item.id} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-gray-900 py-6 italic">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
