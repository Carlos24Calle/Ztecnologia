import React from "react";
import { useForm } from "react-hook-form";
import { post } from "../../httprequeset/httprequeset";
import Swal from "sweetalert2";

const ClientsForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const url = process.env.REACT_APP_API_BASE_URL;
  const cbResponse = (response) => {
    if (response.message === "Client created") {
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
        text: "Usuario ya registrado!",
      });
    }
    console.log(response);
  };
  const onSubmit = (data) => {
    console.log("dataform", data);
    post(`${url}/clients/create`, data, cbResponse);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Registrar Clientes</h2>

        <div className="mb-4">
        <label htmlFor="type_document" 
        className="block text-sm font-medium text-gray-700">
  Tipo de documento
</label>
<select
  id="type_document"
  className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
  {...register("type_document", {
    required: "El tipo de documento es requerido",
  })}
>
  <option value="">Selecciona el tipo de documento</option>
  <option value="CC">CC</option>
  <option value="CE">CE</option>
</select>
{errors.type_document && (
  <span className="text-red-500 text-sm">{errors.type_document.message}</span>
)}

        </div>

        <div className="mb-4">
          <label
            htmlFor="number_document"
            className="block text-sm font-medium text-gray-700"
          >
          Numero de documento
          </label>
          <input
            id="number_document"
            type="int"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("number_document", {
              required: "El numero de documento es requerido",
            
            })}
            placeholder="Numero de documento"
          />
          {errors.number_document && (
            <span className="text-red-500 text-sm">
              {errors.number_document.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firs_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombres
            </label>
            <input
              id="first_name"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("first_name", { required: "Registrar nombres" })}
              placeholder="Nombres"
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm">
                {errors.first_name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Apellidos
            </label>
            <input
              id="last_name"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("last_name", {
                required: "Apellidos requeridos",
              })}
              placeholder="Apellidos"
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm">
                {errors.last_name.message}
              </span>
            )}
          </div>
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

export default ClientsForm
