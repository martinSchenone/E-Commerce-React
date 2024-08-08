import { useEffect, useContext } from "react";
import { CommerceContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import userIMG from "../assets/userPROFILE.png";
export const UserProfile = () => {
  const navigate = useNavigate();
  const { cart, userValues, setUserValues } = useContext(CommerceContext);
  useEffect(() => {
    !userValues && navigate("/login");
  }, [userValues, cart]);
  const logOut = () => {
    localStorage.removeItem("userValues");
    setUserValues(null);
  };
  return (
    <>
      {userValues && (
        <section className="p-2 pb-40 pt-10 flex flex-col items-center justify-start text-center gap-10 text-2xl min-h-screen border border-black">
          <div className="text-3xl flex flex-col border-b-4 border-slate-100  rounded-xl border-r-4 shadow-xl p-2 items-center justify-center">
            <img src={userIMG} className="w-44" />
            <span className="font-bold first-letter:uppercase">
              {userValues.username.length > 20
                ? `${userValues.username.substring(0, 15)}...`
                : userValues.username}
            </span>
          </div>
          <div className="flex flex-col w-full items-start  gap-5">
            <div className="border-b-4 w-full flex justify-center  ">
              <h2 className="font-semibold">User Information</h2>
            </div>
            <div className="flex flex-col items-start border-b-2 w-full">
              <span className="opacity-50">Email</span>
              <span>- {userValues.email}</span>
            </div>
          </div>
          <div className=" flex w-full justify-between ">
            <button
              onClick={() => navigate("/user/cart")}
              className="btn text-xl btn-md btn-info"
            >
              See your cart
            </button>
            <button className="btn px-5 text-xl btn-error " onClick={logOut}>
              Log out
            </button>
          </div>
        </section>
      )}
    </>
  );
};
