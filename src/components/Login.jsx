import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.png";

export const Login = () => {
  return (
    <div className="p-5 md:p-10">
      <form className="form-control  w-full  gap-10">
        <div className="flex flex-col gap-10">
          <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center">
            <span className="cursor-pointer border-b-2 border-slate-500 ">
              Username
            </span>
            <input
              className="input w-[min(100%,600px)]  bg-slate-100 shadow-lg "
              placeholder="Type your username"
              type="text"
            />
          </label>
          <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center relative">
            <span className="cursor-pointer border-b-2 border-slate-500 ">
              Password
            </span>
            <input
              className="input w-[min(100%,600px)]  bg-slate-100 shadow-lg "
              placeholder="Type your password"
              type="password"
            />
            <div>
              <span className="text-sm absolute bottom-0 right-0 link -tracking-tighter">
                forgot password?
              </span>
            </div>
          </label>
        </div>
        <div className="buttons flex flex-col items-center justify-center gap-6">
          <button className="btn btn-md px-20 bg-sky-300 hover:opacity-80 hover:bg-sky-400 border-none text-xl">
            Log in
          </button>
          <span>or sign up</span>
          <Link className="link px-8 rounded bg-yellow-200 font-semibold hover:opacity-80 hover:bg-yellow-300 border-none text-md md:text-xl">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};
