import Table from "./components/table";
import Form from "./components/form";
import { signOut } from "@/auth";
import PowerIcon from "@heroicons/react/24/solid/esm/PowerIcon";

export default function Page() {
  return (
    <>
      <div className="flex w-1/2 justify-end">
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex cursor-pointer  items-center gap-2 bg-[#353535] hover:text-[#b4b4b4]  text-white p-3 text-sm font-medium  md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
      <div className="flex-1 mx-auto">
        <Table />
        <Form />
      </div>
    </>
  );
}
