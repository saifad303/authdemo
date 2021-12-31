import { signOut } from "next-auth/react";
function ProfileDropDown() {
  return (
    <div className="absolute bg-[#1A227D] text-white text-sm w-full leading-8 z-10 p-2 top-[2.50rem]">
      <a href="#">My Profile</a>
      <hr />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

export default ProfileDropDown;
