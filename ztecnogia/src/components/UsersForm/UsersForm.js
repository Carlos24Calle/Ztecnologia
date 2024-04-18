import React from "react";
import { useForm } from "react-hook-form";
import { post } from "../../httprequeset/httprequeset";
import Swal from "sweetalert2";

const UserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const url = process.env.REACT_APP_API_BASE_URL;
  const cbResponse = (response) => {
    if (response.message === "usuario created") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Te has registrado con exito",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error intentalo nuevamente!",
      });
    }
    console.log(response);
  };
  const onSubmit = (data) => {
    console.log("dataform", data);
    post(`${url}/users/create`, data, cbResponse);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("email", {
              required: "El correo es requerido",
            })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: { value: 8, message: "Mínimo 8 caracteres" },
            })}
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firs_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              id="firs_name"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("firs_name", { required: "El nombre es requerido" })}
              placeholder="Nombre"
            />
            {errors.firs_name && (
              <span className="text-red-500 text-sm">
                {errors.firs_name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              id="last_name"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("last_name", {
                required: "El apellido es requerido",
              })}
              placeholder="Apellido"
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            id="phone"
            type="text"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("phone", { required: "El teléfono es requerido" })}
            placeholder="Teléfono"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="rol_id"
            className="block text-sm font-medium text-gray-700"
          >
            Rol
          </label>
          <input
            id="rol_id"
            type="text"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("rol_id", { required: "El rol es requerido" })}
            placeholder="Rol"
          />
          {errors.rol_id && (
            <span className="text-red-500 text-sm">
              {errors.rol_id.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
