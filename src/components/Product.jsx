import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="h-[min(30rem,500px)] border shadow-xl rounded flex flex-col justify-between items-center"
    >
      <div className="p-4 h-3/4">
        <img src={product.image} className="h-full w-full object-contain" />
      </div>
      <div
        className="py-5 w-full shadow bg-slate-100 text-lg font-bold px-5 hover:drop-shadow-xl cursor-pointer
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
