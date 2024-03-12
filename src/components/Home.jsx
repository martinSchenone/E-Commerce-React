import { Cover } from "./Cover";
import { Load } from "./Load";
import { Error } from "./Error";
import { Product } from "./Product";
import { Toast } from "./Toast";
export const Home = ({ toast, products, buttonSeeMore, load, error }) => {
  return (
    <>
      <section className="flex flex-col justify-center gap-10">
        <Cover />
        {load && <Load>Loading Store...</Load>}
        {error && <Error error={error} />}

        <div
          id="home"
          className="grid gap-20 min-h-screen p-2 "
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", }}
        >
          {products &&
            products.map((singleProd) => (
              <Product key={singleProd.id} product={singleProd} />
            ))}
        </div>
        <button
          onClick={buttonSeeMore}
          className="btn my-5 bg-slate-300 text-2xl text-center btn-wide border self-center"
        >
          See more
        </button>
        {toast && <Toast>There are no more products to see...</Toast>}
      </section>
    </>
  );
};
