import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { signIn, getProviders } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

function SignIn({ providers }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("You are not allowed here.");
    },
  });
  return (
    <div className="bg-blue-500 h-screen w-screen flex items-center justify-center overflow-y-auto">
      <div className=" w-[270px] sm:w-[300px] lg:w-[400px] bg-white text-center rounded">
        <p className=" text-2xl font-medium mt-[50px] mb-10">Login</p>
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
          <div className="text-right text-xs lg:text-base  mr-[16%] sm:mr-[12%] mb-6 text-blue-600">
            <a href="#">Forget Password ?</a>
          </div>
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className=" block bg-blue-900 text-white rounded h-10 w-[69%] sm:w-[76%]"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm mb-3">Or Sign Up Using</p>
        <div className="flex items-center justify-center space-x-2 mb-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button
                className=" bg-red-500 p-2 rounded-full"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <BsGoogle height={15} width={15} color="white" />
              </button>
            </div>
          ))}
          <a href="#" className=" bg-blue-900 p-2 rounded-full">
            <BsFacebook height={15} width={15} color="white" />
          </a>
          <a href="#" className=" bg-blue-500 p-2 rounded-full">
            <BsTwitter height={15} width={15} color="white" />
          </a>
        </div>
        <p className=" text-sm mb-10">
          Don't have account ?{" "}
          <a href="#" className=" text-blue-500 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;

export async function getServerSideProps({ req }) {
  const providers = await getProviders();
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
}
