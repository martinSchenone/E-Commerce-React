import { createContext, useState } from "react";
export const CommerceContext = createContext();
const localCart = JSON.parse(localStorage.getItem("localCart")) || [];

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);

  return (
    <CommerceContext.Provider value={{ cart, setCart }}>
      {children}
    </CommerceContext.Provider>
  );
};
