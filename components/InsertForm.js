import { useInsertData } from "../context/DataInsertProvider";
import { MinusCircleIcon } from "@heroicons/react/outline";
function InsertForm() {
  const { insertFormHandler } = useInsertData();
  return (
    <div className="flex justify-center items-center w-screen h-[105%] bg-black/80 absolute top-0 left-0">
      <div className=" w-[270px] sm:w-[300px] lg:w-[400px] bg-white text-center rounded relative">
        <div
          className="absolute right-4 top-3 cursor-pointer"
          onClick={() => insertFormHandler()}
        >
          <MinusCircleIcon className="h-8" />
        </div>
        <p className=" text-2xl font-medium mt-[50px] mb-6">Insert Data</p>
        <p className=" font-semibold">Request No: RQ145214</p>
        <form action="" className="mb-9">
          <input
            type="text"
            placeholder="User Name"
            className=" outline-none border-b-2 border-gray-300 mb-6 sm:w-[75%]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className=" outline-none border-b-2 border-gray-300 mb-2 sm:w-[75%]"
          />
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className=" block bg-blue-900 text-white rounded h-10 w-[69%] sm:w-[76%]"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InsertForm;
