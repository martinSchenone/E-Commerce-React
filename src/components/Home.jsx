import { Cover } from "./Cover";
import { Load } from "./Load";
import { Error } from "./Error";
import { Product } from "./Product";
import { Toast } from "./Toast";
import { ButtonSeeMore } from "./ButtonSeeMore";
import {useEffect, useRef, useState} from "react";
export const Home = ({
  setToast,
  toast,
  products,
  buttonSeeMore,
  load,
  error,
  limite,
}) => {
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center gap-10">
          <Cover />
        {load && <Load>Loading Store...</Load>}
        {error && <Error error={error} />}

        <div
          ref={myRef}
          id="home"
          className={`grid gap-20 min-h-screen p-2 
            ${myElementIsVisible ? "opacity-100" : " opacity-0"}`}
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            transitionDuration: "1s",
          }}
        >
          {products &&
            products.map((singleProd) => (
              <Product key={singleProd.id} product={singleProd} />
            ))}
        </div>
        <ButtonSeeMore limite={limite} buttonSeeMore={buttonSeeMore} />
        {toast && <Toast>There are no more products to see...</Toast>}
      </section>
    </>
  );
};
