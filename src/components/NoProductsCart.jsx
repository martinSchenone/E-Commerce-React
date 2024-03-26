import cart from "../assets/cart.svg";
import { useNavigate } from "react-router-dom";
export const NoProductsCart = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <section className="max-w-lg mx-auto p-5 w-full">
      <div className="flex flex-col gap-10 text-2xl font-normal self-center items-center justify-center min-h-[30vh]   border w-full rounded bg-slate-50 px-10 md:p-20 text-center">
        <h1 className="">Cart is empty</h1>
        <img src={cart} className="w-12 h-12 md:w-20 md:h-20" />
        <button
          onClick={goToHome}
          className="btn lg:text-lg bg-blue-400 text-white "
        >
          See our products
        </button>
      </div>
    </section>
  );
};
