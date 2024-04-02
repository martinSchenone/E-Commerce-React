import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { OnlyProd } from "./components/OnlyProd";
import { ShowCart } from "./components/ShowCart";
import { getProds } from "./utils/getProds";
import { SearcherPage } from "./components/SearcherPage";
import { UserLogin } from "./components/UserLogin";
import {UserProfile} from './components/UserProfile'
import { UserRegister } from "./components/UserRegister";
/*
Terminar nav y hacerlo responsive V
empezar con el carrito (sessionStorage) V
empezar con el auth (firebase) X
crear el loader y error component V
crear el searcher y el filtro por categorias, precio o ratings  X */
function App() {
  const [products, setProducts] = useState([]);
  const [limite, setLimite] = useState(8);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [load, setLoad] = useState(true);
  const [toast, setToast] = useState(false);

  const buttonSeeMore = () => {
    if (products) {
      if (limite < 20) {
        setLimite((prevLimite) => prevLimite + 4);
      } else {
        setToast(true);
        limite >= 20 ? setTimeout(() => setToast(false), 4000) : null;
      }
    } else alert("There was an error obtaining products");
  };

  useEffect(() => {
    getProds(`?limit=${limite}`)
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError({
          ...error,
          isError: true,
          errorMessage: "There was an error obtaining data",
        });
      })
      .finally(setLoad(false));
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
              setToast={setToast}
              limite={limite}
            />
          }
        />
        <Route path="/product/:id" element={<OnlyProd />} />
        <Route path="/user/cart" element={<ShowCart />} />
        <Route path="/category/:params" element={<SearcherPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route
          path="/register"
          element={<UserRegister toast={toast} setToast={setToast} />}
        />
        <Route path="/user/profile" element={<UserProfile />} />

      </Routes>
    </>
  );
}

export default App;
