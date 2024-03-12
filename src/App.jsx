import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { OnlyProd } from "./components/OnlyProd";
import { ShowCart } from "./components/ShowCart";

/*
Terminar nav y hacerlo responsive
empezar con el carrito (sessionStorage)
empezar con el auth (firebase)
crear el loader y error component
crear el searcher y el filtro por categorias, precio o ratings */
function App() {
  const [products, setProducts] = useState([]);
  const [limite, setLimite] = useState(6);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [load, setLoad] = useState(true);
  const [toast, setToast] = useState(false);

  const getProds = async (limit) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    try {
      const data = await res.json();
      if (res.ok) {
        setProducts(data);
        setError(null);
      }
    } catch (err) {
      setError({
        ...error,
        isError: true,
        errorMessage: "There was an error obtaining data",
      });
      setProducts(null);
    } finally {
      setLoad(false);
    }
  };
  const buttonSeeMore = () => {
    if (products) {
      if (limite < 20) {
        setLimite((prevLimite) => prevLimite + 6);
      } else {
        setToast(true);
      }
    } else alert("There was an error obtaining products");
  };

  useEffect(() => {
    getProds(limite);
  }, [limite]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              buttonSeeMore={buttonSeeMore}
              load={load}
              error={error}
              toast={toast}
            />
          }
        />
        <Route path="/product/:id" element={<OnlyProd />} />
        <Route path="/user/cart" element={<ShowCart />} />
      </Routes>
    </>
  );
}

export default App;
