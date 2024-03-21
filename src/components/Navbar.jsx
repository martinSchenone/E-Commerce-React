import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import cart from "../assets/cart.svg";
import userIcon from "../assets/userIcon.png";
import "../App.css";
import { useEffect, useState } from "react";
import { getProds } from "../utils/getProds";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [categories, setCategories] = useState(null);
  const getWidth = () => {
    const { innerWidth: width } = window;
    return width;
  };
  const [getWindowDimensions, setGetWindowDimensions] = useState(getWidth());
  const navigate = useNavigate();
  const handleSelect = (e) => {
    const categoryID = e.target.value || "";
    if (categoryID) {
      navigate(`/category/${categoryID}`);
    }
  };
  useEffect(() => {
    getProds("/categories").then((data) => setCategories(data));
    function handleResize() {
      setGetWindowDimensions(getWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-auto max-h-20 shadow-xl w-full mb-10">
      <nav className="navbar">
        <div className="sm:navbar-start w-8 card-title">
          <NavLink to={"/"} className={"relative"}>
            <h1 className="h1Sub  text-2xl font-bold uppercase tracking-tighter border-slate-200     drop-shadow-xl [text-shadow:_0px_1px_0px_rgb(0_0_0_/_50%)]">
              {getWindowDimensions > 768 ? "Vestique" : "V"}
            </h1>
          </NavLink>
        </div>
        <div className="navbar-start md:navbar-center">
          <select
            defaultValue={"Categories"}
            onChange={handleSelect}
            className="select select-bordered border-slate-300 select-xs md:select-md w-full max-w-xs text-xs md:text-xl"
          >
            <option disabled value={"Categories"}>
              Categories
            </option>
            {categories &&
              categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <ul className="navbar-end gap-4 text-lg font-semibold md:pr-5">
          <li className="link-hover cursor-pointer">
            <NavLink to={"/"}>
              <img src={home} alt="home icon from icons8" className="h-6 w-6" />
            </NavLink>
          </li>
          <li className="link-hover cursor-pointer">
            <NavLink to={"/user/cart"}>
              <img src={cart} alt="cart icon from icons8" className="h-6 w-6" />
            </NavLink>
          </li>
          <li className="link-hover cursor-pointer">
            <NavLink to={"/login"}>
              <img
                src={userIcon}
                alt="user icon from icons8"
                className="h-6 w-6"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
