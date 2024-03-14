import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className=" border shadow-xl rounded flex flex-col justify- items-center justify-between"
    >
      <div className="img p-4 h-3/4 border">
        <img src={product.image} className="h-full w-full object-contain " />
      </div>
      <div
        className="title py-20 border flex flex-col items-start justify-center w-full shadow h-1/4 bg-slate-100 text-lg font-bold px-5 hover:drop-shadow-xl cursor-pointer
               "
      >
        <h1>
          {product.title.length > 30
            ? `${product.title.substring(0, 25)}...`
            : product.title}
        </h1>
        <p className="text-xl text-gary-800">$ {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};
