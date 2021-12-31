import {
  SearchIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useInsertData } from "../context/DataInsertProvider";
function SearchBar() {
  const { insertFormHandler } = useInsertData();
  return (
    <div className=" relative pl-5 pr-20 h-16 w-full bg-[#0c1251] flex items-center text-white">
      <div className="flex items-center space-x-7">
        <div className="flex flex-col items-center justify-center">
          <SearchIcon className="h-6" />
          <p className="text-[10px]">Search</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ChevronDownIcon className="h-6" />
          <p className="text-[10px]">Show KPIS</p>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-center items-center">
        <div className="flex items-center space-x-3">
          <button>
            <ChevronLeftIcon className="h-6" />
          </button>
          <p className="text-xs">Page 1 of 5</p>
          <button>
            <ChevronRightIcon className="h-6" />
          </button>
        </div>
        <p className="text-[10px]">Showing 1-30 results</p>
      </div>
      <button
        className=" absolute right-0 top-5 bg-[#b4009d] p-3 rounded rounded-r-none"
        onClick={() => insertFormHandler()}
      >
        <PlusCircleIcon className="h-10" />
      </button>
    </div>
  );
}

export default SearchBar;
