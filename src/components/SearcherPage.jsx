import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../utils/getProds";
import { Product } from "./Product";
import { Load } from "./Load";
import { Error } from "./Error";

export const SearcherPage = () => {
  const { params } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [load, setLoad] = useState(true);
  useEffect(() => {
    getProds(`/category/${params}`)
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        setError({
          ...error,
          isError: true,
          errorMessage: "There was an error obtaining products" + e,
        });
      })
      .finally(setLoad(false));
    return () => {
      setProducts(null);
    };
  }, [params,error]);
  return (
    <section className="searchPage flex flex-col justify-center pb-40  px-2 mx-auto max-w-7xl w-full gap-10">
      {error && <Error error={error} />}
      <div className="text-2xl font-semibold flex flex-col gap-2">
        <h1 className="uppercase border-b-2  w-fit">{params}</h1>
      </div>
      {load && <Load>Loading products</Load>}
      <div
        id="home"
        className={`grid gap-20 min-h-screen `}
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          transitionDuration: "1s",
        }}
      >
        {products &&
          products.map((prod) => <Product key={prod.id} product={prod} />)}
      </div>
    </section>
  );
};
