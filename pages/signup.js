import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
function Signup() {
  return (
    <div className="bg-blue-500 h-screen w-screen flex items-center justify-center overflow-y-auto">
      <div className=" w-[270px] sm:w-[300px] lg:w-[400px] bg-white text-center rounded">
        <p className=" text-2xl font-medium mt-[50px] mb-10">Signup</p>
        <form action="" className="mb-9">
          <input
            type="text"
            placeholder="First Name"
            className=" outline-none border-b-2 border-gray-300 mb-6 sm:w-[75%]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" outline-none border-b-2 border-gray-300 mb-6 sm:w-[75%]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className=" outline-none border-b-2 border-gray-300 mb-6 sm:w-[75%]"
          />
          <input
            type="password"
            placeholder="Retype Password"
            className=" outline-none border-b-2 border-gray-300 mb-10 sm:w-[75%]"
          />
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className=" block bg-blue-900 text-white rounded h-10 w-[69%] sm:w-[76%]"
            >
              Signup
            </button>
          </div>
        </form>
        <p className="text-sm mb-3">Or Sign Up Using</p>
        <div className="flex items-center justify-center space-x-2 mb-10">
          <a href="#" className=" bg-red-500 p-2 rounded-full">
            <BsGoogle height={15} width={15} color="white" />
          </a>
          <a href="#" className=" bg-blue-900 p-2 rounded-full">
            <BsFacebook height={15} width={15} color="white" />
          </a>
          <a href="#" className=" bg-blue-500 p-2 rounded-full">
            <BsTwitter height={15} width={15} color="white" />
          </a>
        </div>

        <p className=" text-sm mb-10">
          Do you have an account ?{" "}
          <a href="#" className=" text-blue-500 font-semibold">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
