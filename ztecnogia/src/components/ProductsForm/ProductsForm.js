import React from "react";
import { useForm } from "react-hook-form";
import { postAuth, get } from "../../httprequeset/httprequeset";
import Swal from "sweetalert2";

const ProductsForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const url = process.env.REACT_APP_API_BASE_URL;
  const cbResponse = (response) => {
    if (response.message === "product created") {
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
    postAuth(`${url}/product/create`, data, cbResponse);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Registrar Productos</h2>

        <div className="mb-4">
          <label
            htmlFor="refe"
            className="block text-sm font-medium text-gray-700"
          >
            Referencia
          </label>
          <input
            id="ref"
            type="text"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("ref", {
              required: "La refencia es requerida",
            })}
            placeholder="Referencia"
          />
          {errors.ref && (
            <span className="text-red-500 text-sm">{errors.ref.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("name", {
              required: "El nombre es requerido",
            })}
            placeholder="Nombre"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firs_name"
              className="block text-sm font-medium text-gray-700"
            >
              Marca
            </label>
            <input
              id="brand"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("brand", {
                required: "Registrar marca del producto",
              })}
              placeholder="Marca"
            />
            {errors.brand && (
              <span className="text-red-500 text-sm">
                {errors.brand.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Cantidad
            </label>
            <input
              id="aumount"
              type="int"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("amount", {
                required: "Cantidad es requerida",
              })}
              placeholder="Cantidad"
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">
                {errors.amount.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <input
            id="price"
            type="decimal"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("price", { required: "El precio  es requerido" })}
            placeholder="Precio"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Descuento
          </label>
          <input
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("discount_price")}
            placeholder="discount_price"
          />
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

export default ProductsForm;
