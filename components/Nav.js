import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProfileAndNotification from "./ProfileAndNotification";
function Nav() {
  return (
    <div className="flex items-center h-14 sm:h-16 md:h-20 w-full bg-[#1a227d]">
      <button className="bg-[#2f388f] h-full flex items-center justify-center w-[66px]">
        <BsFillGrid3X3GapFill size={24} className="text-white" />
      </button>
      <div className="h-full max-w-md flex items-center justify-center pl-3 sm:pl-5">
        <p className="text-white mr-1 text-sm xs:text-xl md:text-xl sm:text-2xl">
          Basic CRUD UI
        </p>
      </div>
      <div className="text-white bg-[#10175e] h-full flex flex-col justify-center pl-[13px] pr-[18px] ml-auto">
        <p className=" text-[10px] md:text-sm">Report exporting</p>
        <p className=" text-base md:text-2xl">20 %</p>
      </div>
      <ProfileAndNotification />
    </div>
  );
}

export default Nav;
