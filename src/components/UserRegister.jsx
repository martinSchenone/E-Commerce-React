import { useEffect, useState } from "react";
import { Register } from "./Register";
import { Toast } from "./Toast";
/* me falta arreglar el toast, me falta verificar el user y crearlo previamente en un contexto y obtenerlo del localstorge */
export const UserRegister = ({ setToast, toast }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    addToLocal(values);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2500);
  };
  const addToLocal = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <section className="max-w-xl mx-auto w-full  min-h-screen bg-white">
      <Register handleSubmit={handleSubmit} onChange={onChange} />
      {toast && <Toast>Registration successfull</Toast>}
    </section>
  );
};
