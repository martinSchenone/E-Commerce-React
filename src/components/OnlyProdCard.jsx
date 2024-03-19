import { Toast } from "./Toast";
export const OnlyProdCard = ({ onlyProd, addToCart, setWasAdd, wasAdd }) => {
  return (
    <div
      key={onlyProd.id}
      className="w-[min(80%,600px)] border   shadow-xl rounded flex flex-col justify-center items-center mb-40"
    >
      <div className="h-full px-10 items-center flex justify-center">
        <img src={onlyProd.image} className="max-h-72" />
      </div>
      <div
        className="flex flex-col gap-2 pt-10 w-full shadow bg-slate-100 px-5 py-5 hover:drop-shadow-xl cursor-pointer -tracking-tighter
         "
      >
        <h1 className="text-md text-gray-800 font-bold ">{onlyProd.title}</h1>
        <p className="text-2xl text-gary-800">$ {onlyProd.price.toFixed(2)}</p>
        <span>
          or 12 x <strong>$ {Math.round(onlyProd.price / 12)}.00</strong>
        </span>
        <span className="text-md text-gray-600">{onlyProd.description}</span>
      </div>
      <div className="self-start">
        <button
          className="btn my-2 mx-2 bg-sky-500 hover:bg-sky-700 text-white "
          onClick={() => {
            addToCart(onlyProd);
            setWasAdd(true);
          }}
        >
          Add To Cart
        </button>
        {wasAdd && <Toast>Product was added successfully</Toast>}
      </div>
    </div>
  );
};
