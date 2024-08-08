import { useContext, useEffect, useState } from "react";
import { CommerceContext } from "../context/context";
import trashcan from "../assets/trashcan.svg";
import { NoProductsCart } from "./NoProductsCart";

export const ShowCart = () => {
  const [isBuyModal, setIsBuyModal] = useState(null);
  const { cart, setCart } = useContext(CommerceContext);
  const deleteProd = (prod) => {
    const deletedItem = cart?.filter((item) => item.id !== prod.id);
    setCart([...deletedItem]);
    addToLocal(deletedItem);
  };
  const addToLocal = (localCartItem) => {
    localStorage.setItem("localCart", JSON.stringify(localCartItem));
  };
  let itemsQuantity =
    cart
      ?.map((item) => item.quantity * item.price)
      .reduce((anterior, actual) => anterior + actual, 0)
      .toFixed(2) || [];
  useEffect(() => {}, [cart]);

  const buyModal = () => {
    setIsBuyModal(true);
  };
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center gap-10 p-5 relative   ">
      <div className="flex flex-col relative container items-center justify-center md:flex-row mb-[20rem] z-10 md:mb-0 md:gap-10">
        <div className="flex flex-col gap-10 mx-auto px-2 items-center justify-center mb-40 md:flex-[2]">
          {cart.length == 0 && <NoProductsCart />}
          {cart &&
            cart?.map((cartItem) => (
              <div
                key={cartItem.id}
                className="border border-slate-300 shadow rounded-xl md:px-4 py-4 px-2 w-[min(100%,900px)] mx-auto cart_container flex flex-col md:flex-row gap-10 text-center items-center justify-center md:justify-between"
              >
                <div className="cart_image h-[min(30vh,600px)] md:h-52 md:flex-[1.5]">
                  <img
                    src={cartItem.image}
                    className="h-full w-full object-contain md:max-w-28   "
                  />
                </div>
                <div className="cart_title  border-b-2 md:border-b-0 text-lg lg:text-xl font-normal md:flex-1">
                  <h1>{cartItem.title}</h1>
                </div>
                <div className="self-start md:self-center text-lg md:flex-1">
                  <span className="text-gray-600">Quantity in cart: </span>
                  <span className="relative ">
                    <span className="">{cartItem.quantity}</span>
                  </span>
                </div>
                <div className=" self-end md:self-center md:flex-1">
                  <button
                    onClick={() => deleteProd(cartItem)}
                    className="btn btn-sm btn-warning"
                  >
                    <img src={trashcan} className="min-w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div
          className={`md:mb-0 flex flex-col items-center md:flex-[1] md:self-start md:rounded-xl border-t-slate-300 justify-center total_cont fixed md:relative bottom-0 border w-full bg-slate-100 p-4 gap-2 ${
            cart.length == 0 ? "md:opacity-70" : "opacity-100"
          }`}
        >
          <div
            className="flex  w-full justify-between   text-sm
          "
          >
            <h1>Products ({cart && cart.length})</h1>
            <span>$ {itemsQuantity && itemsQuantity}</span>
          </div>
          <div className="flex  justify-between w-full text-sm">
            <span> Shipping</span>
            <span className="uppercase font-bold text-green-600">FREE</span>
          </div>
          <div className="flex  justify-between w-full text-xl">
            <span> Total</span>
            <span className="uppercase font-bold ">$ {itemsQuantity}</span>
          </div>
          <div
            className={`flex items-center justify-center border btn bg-green-400 hover:bg-green-600 border- w-full uppercase text-xl ${
              cart.length == 0 ? "btn-disabled" : ""
            }`}
          >
            <button onClick={() => buyModal()}>Buy</button>
          </div>
        </div>
      </div>
      {isBuyModal && (
        <div className="buy_container w-[90%] max-w-[500px]  fixed flex top-32 items-center justify-center min-h-72 z-50 bg-blue-50 border border-gray-400 shadow-xl">
          <div className="flex flex-col gap-10 w-full p-4">
            <div className="uppercase self-start text-xl font-semibold border-b-2">
              <h1>Order confirmation</h1>
            </div>
            <div className="">
              <div className="flex flex-col gap-6">
                {cart &&
                  cart?.map((itemCart) => (
                    <div
                      key={itemCart.id}
                      className="text-sm flex border-b-2 text-start items-center justify-center"
                    >
                      <h1 className="flex-1">{itemCart.title}</h1>
                      <span className="flex-[0.2] self-end">
                        ({itemCart.quantity})
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="uppercase font-bold">Total price ${itemsQuantity}</div>
            <div className="uppercase text-sm btn bg-blue-300 text-gray-900 font-bold">
              <h1>Confirm purchase</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
