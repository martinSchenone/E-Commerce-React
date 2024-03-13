import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommerceContext } from "../context/context";
import { Load } from "./Load";
import { OnlyProdCard } from "./OnlyProdCard";
import { Error } from "./Error";
export const OnlyProd = () => {
  const { cart, setCart } = useContext(CommerceContext);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);
  const [wasAdd, setWasAdd] = useState(false);
  const [onlyProd, setOnlyProd] = useState(null);

  const getOnlyProd = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    try {
      const data = await res.json();
      if (res.ok) {
        setOnlyProd(data);
      }
    } catch (error) {
      setError({
        ...error,
        isError: true,
        errorMessage: "There was an error obtaining data",
      });
    } finally {
      setLoad(false);
    }
  };
  const addToCart = (onlyProd) => {
    let addQuantityToItem = { ...onlyProd, quantity: 1 };
    let isInCart = cart.find((item) => item.id == addQuantityToItem.id);
    if (!isInCart) {
      setCart((prevCart) => [...prevCart, addQuantityToItem]);
      addToLocal([...cart, addQuantityToItem]);
    } else if (isInCart) {
      const addingQuantity = cart.map((item) =>
        item.id === isInCart.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart([...addingQuantity]);
      addToLocal(addingQuantity);
    }
  };
  const addToLocal = (localCartItem) => {
    localStorage.setItem("localCart", JSON.stringify(localCartItem));
  };

  useEffect(() => {
    getOnlyProd(id);
    setTimeout(() => setWasAdd(false), 3000);
  }, [id, cart]);
  return (
    <div className="flex justify-center min-h-screen p-5">
      {load && <Load>Loading Product...</Load>}
      {error && <Error error={error} />}
      {onlyProd && (
        <OnlyProdCard
          onlyProd={onlyProd}
          wasAdd={wasAdd}
          setWasAdd={setWasAdd}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};
