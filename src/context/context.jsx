import { createContext, useState } from "react";
export const CommerceContext = createContext();
const localCart = JSON.parse(localStorage.getItem("localCart")) || [];
const userData = JSON.parse(localStorage.getItem("userValues")) || null;


export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [userValues, setUserValues] = useState(userData)
  return (
    <CommerceContext.Provider value={{ cart, setCart , userValues,setUserValues}} >
      {children}
    </CommerceContext.Provider>
  );
};
