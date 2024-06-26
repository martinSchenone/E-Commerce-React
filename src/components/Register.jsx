// import { Link } from "react-router-dom";
// export const Register = ({ handleForm, onChange }) => {
//   return (
//     <>
//       <div className="p-5 mt-20 md:p-10  border bg-[#f5f6f7] shadow-lg rounded-lg">
//         <form className="form-control  w-full  gap-10" onSubmit={handleForm}>
//           <div className="flex flex-col gap-10">
//             <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center">
//               <span className="cursor-pointer border-b-2 border-slate-500 ">
//                 Username
//               </span>
//               <input
//                 onChange={onChange}
//                 name="username"
//                 className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
//                 placeholder="Type your username"
//                 type="text"
//                 required
//               />
//             </label>
//             <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center">
//               <span className="cursor-pointer border-b-2 border-slate-500 ">
//                 Email
//               </span>
//               <input
//                 onChange={onChange}
//                 name="email"
//                 className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
//                 placeholder="Type your email"
//                 type="email"
//                 required

//               />
//             </label>
//             <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center relative">
//               <span className="cursor-pointer border-b-2 border-slate-500 ">
//                 Password
//               </span>
//               <input
//                 onChange={onChange}
//                 name="password"
//                 className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
//                 placeholder="Type your password"
//                 type="password"
//                 required

//               />
//             </label>
//             <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center relative">
//               <span className="cursor-pointer border-b-2 border-slate-500 ">
//                 Confirm password
//               </span>
//               <input
//                 onChange={onChange}
//                 name="confirmPassword"
//                 className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
//                 placeholder="Confirm your password"
//                 type="password"
//                 required

//               />
//             </label>
//           </div>
//           <div className="buttons flex flex-col items-center justify-center gap-6">
//             <button className="btn btn-md px-20 bg-sky-300 hover:opacity-80 hover:bg-sky-400 border-none text-xl">
//               Sign up
//             </button>
//             <span>or log in</span>
//             <Link
//               to={"/login"}
//               className="link px-8 rounded bg-yellow-300 font-semibold hover:opacity-80 hover:bg-yellow-400 border-none text-md md:text-xl"
//             >
//               Log in
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

import { Link } from "react-router-dom";
export const Register = ({
  isSubmitting,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  return (
    <>
      <section className="pb-40">
        <div className="p-5 mt-20 md:p-10  border bg-[#f5f6f7] shadow-lg rounded-lg">
          <form
            className="form-control  w-full  gap-10 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-10">
              <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center">
                <span className="cursor-pointer border-b-2 border-slate-500 ">
                  Username
                </span>
                <input
                  {...register("username")}
                  className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
                  placeholder="Type your username"
                  type="text"
                />
                {errors.username && (
                  <div className="text-red-500">{errors.username.message}</div>
                )}
              </label>
              <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center">
                <span className="cursor-pointer border-b-2 border-slate-500 ">
                  Email
                </span>
                <input
                  {...register("email")}
                  className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
                  placeholder="Type your email"
                  type="email"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </label>
              <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center relative">
                <span className="cursor-pointer border-b-2 border-slate-500 ">
                  Password
                </span>
                <input
                  {...register("password")}
                  className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
                  placeholder="Type your password"
                  type="password"
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </label>
              <label className="label flex-col justify-start items-start text-2xl font-semibold gap-5 text-center relative">
                <span className="cursor-pointer border-b-2 border-slate-500 ">
                  Confirm password
                </span>
                <input
                  {...register("confirmPassword")}
                  className="input w-[min(100%,600px)]  bg-slate-200 shadow-lg "
                  placeholder="Confirm your password"
                  type="password"
                />
              </label>
              {errors.confirmPassword && (
                <div className="text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="buttons flex flex-col items-center justify-center gap-6">
              <button
                disabled={isSubmitting}
                className="btn btn-md px-20 bg-sky-300 hover:opacity-80 hover:bg-sky-400 border-none text-xl"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
              <span>or log in</span>
              <Link
                to={"/login"}
                className="link px-8 rounded bg-yellow-300 font-semibold hover:opacity-80 hover:bg-yellow-400 border-none text-md md:text-xl"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
