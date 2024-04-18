import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { post } from "../../httprequeset/httprequeset";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/AuthContext";
import { 
 useNavigate
} from 'react-router-dom';


const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const url = process.env.REACT_APP_API_BASE_URL;

  const  {signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const cbRedirect = () =>{
    navigate("/Home")
  }

  

  const cbResponse = (response) => {
    

    if (response.message === "El usuario no esta registrado") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario no existe!",
      });
    } else if (response.message === "Contraseña incorrecta ") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error de contraseña!",
      });
    } else {
      localStorage.setItem("userInfo", JSON.stringify(response));
      signin(response,cbRedirect);
    }
  };

  const onSubmit = (data) => {
    console.log("dataform", data);
    post(`${url}/auth/login`, data, cbResponse);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 border-2 p-5 mt-8 items-center rounded-lg shadow-md bg-white"
      >
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <label className="mb-2">Email</label>
        <input
          className="border-2 border-gray-300 rounded h-10 px-3 mb-4 focus:outline-none focus:border-blue-500"
          {...register("email", {
            required: "Email requerido",
            maxLength: { value: 50, message: "Email demasiado largo" },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <label className="mb-2">Password</label>
        <input
          className="border-2 border-gray-300 rounded h-10 px-3 mb-4 focus:outline-none focus:border-blue-500"
          type="password"
          {...register("password", {
            required: "Contraseña requerida",
            minLength: { value: 8, message: "Mínimo 8 caracteres" },
          })}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
  // };
};

export default LoginForm;
