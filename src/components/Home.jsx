import { Cover } from "./Cover";
import { Load } from "./Load";
import { Error } from "./Error";
import { Product } from "./Product";
import { Toast } from "./Toast";
import { ButtonSeeMore } from "./ButtonSeeMore";
export const Home = ({
  setToast,
  toast,
  products,
  buttonSeeMore,
  load,
  error,
  limite,
}) => {
  return (
    <>
      <section className="flex flex-col justify-center gap-10">
        <Cover />
        {load && <Load>Loading Store...</Load>}
        {error && <Error error={error} />}

        <div
          id="home"
          className="grid gap-20 min-h-screen p-2 "
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
        >
          {products &&
            products.map((singleProd) => (
              <Product key={singleProd.id} product={singleProd} />
            ))}
        </div>
        <ButtonSeeMore
          setToast={setToast}
          limite={limite}
          buttonSeeMore={buttonSeeMore}
        />
        {toast && <Toast>There are no more products to see...</Toast>}
      </section>
    </>
  );
};
