import {
  BellIcon,
  MailIcon,
  CogIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import ProfileDropDown from "./ProfileDropDown";
import { useState } from "react";
function ProfileAndNotification() {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <div className=" flex flex-col h-full w-[105px] sm:w-[120px] relative">
      <button
        onClick={() => {
          setIsDropDown(!isDropDown);
        }}
        className="bg-[#2f388f] h-full flex items-center space-x-1"
      >
        <p className="text-white text-xs pl-[12px] sm:text-sm md:text-sm">
          David Gomez
        </p>
        <ChevronDownIcon className="h-4 text-white" />
      </button>
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
      {isDropDown ? <ProfileDropDown /> : ""}
    </div>
  );
}

export default ProfileAndNotification;
