import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BellIcon, MailIcon, CogIcon } from "@heroicons/react/outline";

function Nav() {
  return (
    <div className="flex items-center h-14 sm:h-16 md:h-20 w-screen bg-[#1a227d]">
      <div className="bg-[#2f388f] h-full flex items-center justify-center w-[66px]">
        <BsFillGrid3X3GapFill size={24} className="text-white" />
      </div>
      <div className="h-full max-w-md flex items-center justify-center pl-5">
        <p className="text-white text-2xl ">Basic CRUD UI</p>
      </div>
      <div className="text-white bg-[#10175e] h-full flex flex-col justify-center pl-[13px] pr-[18px] ml-auto">
        <p className=" text-xs md:text-sm">Report exporting</p>
        <p className=" text-xl md:text-2xl">20 %</p>
      </div>
      <div className=" flex flex-col h-full w-[105px] sm:w-[120px]">
        <div className="bg-[#2f388f] h-full flex items-center">
          <p className="text-white text-xs pl-[12px] sm:text-sm md:text-sm">
            David Gomez
          </p>
        </div>
        <div className="flex items-center h-full border-t border-gray-700">
          <div className=" w-4/12 h-full flex items-center justify-center border-r border-gray-700">
            <BellIcon height={15} width={15} className=" text-white" />
          </div>
          <div className=" w-4/12 h-full flex items-center justify-center border-r border-gray-700">
            <MailIcon height={15} width={15} className=" text-white" />
          </div>
          <div className=" w-4/12 h-full flex items-center justify-center">
            <CogIcon height={15} width={15} className=" text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
