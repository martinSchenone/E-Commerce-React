import { useContext, useState } from "react";
import { Register } from "./Register";
import { Toast } from "./Toast";
import { CommerceContext } from "../context/context";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
const schema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
/* me falta arreglar el toast, me falta verificar el user y crearlo previamente en un contexto y obtenerlo del localstorge */
export const UserRegister = ({ setToast, toast }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const { userValues, setUserValues } = useContext(CommerceContext);
  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // const handleForm = (e) => {
  //   e.preventDefault();
  //   setUserValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  //   addToLocal({...values,userValues});
  //   setToast(true);
  //   setTimeout(() => {
  //     setToast(false);
  //   }, 2500);
  // };
  const navigate = useNavigate()
  const addToLocal = (user) => {
    localStorage.setItem("userValues", JSON.stringify(user));
  };
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUserValues(data);
      addToLocal(data);
      setTimeout(()=>navigate("/user/profile"),2500)
    } catch (error) {
      setError("email", {
        message: "this email is already taken",
      });
    }
  };
  console.log(userValues);
  return (
    <section className="max-w-xl mx-auto w-full  min-h-screen bg-white">
      <Register
        isSubmitting={isSubmitting}
        register={register}
        handleSubmit={handleSubmit}
        // handleForm={handleForm}
        // onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
      />
      {toast && <Toast>Registration successfull</Toast>}
    </section>
  );
};
