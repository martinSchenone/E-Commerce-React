import cart from "../assets/cart.svg";
import {useNavigate} from 'react-router-dom'
export const NoProductsCart = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
  return (
    <div className="flex flex-col gap-10 text-2xl font-normal self-center items-center justify-center min-h-[30vh] p-20 md:p-5 border w-full rounded bg-slate-50">
      <h1>Cart is empty</h1>
      <img src={cart} className="w-20 h-20" />
      <button onClick={goToHome} className="btn text-lg bg-blue-400 text-white px-20">
        See our products
      </button>
    </div>
  );
};
