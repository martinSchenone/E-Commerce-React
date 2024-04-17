import { useEffect, useContext } from "react";
import { CommerceContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const navigate = useNavigate();
  const { cart, userValues, setUserValues } = useContext(CommerceContext);
  useEffect(() => {
    !userValues && navigate("/login");
  }, [userValues, cart]);
  const logOut = () => {
    localStorage.removeItem("userValues")
    setUserValues(null)
  }
  return (
    <>
      {userValues && (
        <section className="p-2 pb-40 pt-10 flex flex-col items-center justify-start text-center gap-10 text-2xl">
          <div className="text-3xl flex flex-col gap-2 ">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              className="w-44"
            />
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
          <div className="self-end flex w-full justify-between">
            <button
              onClick={() => navigate("/user/cart")}
              className="btn text-xl btn-md btn-info"
            >
              See your cart
            </button>
            <button
              className="btn px-5 text-xl btn-error "
              onClick={logOut}
            >
              Log out
            </button>
          </div>
        </section>
      )}
    </>
  );
};
