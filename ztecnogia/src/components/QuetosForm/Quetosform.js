import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { postAuth, get } from "../../httprequeset/httprequeset";
import Swal from "sweetalert2";
import { currencyFormatNumber, url } from "../../utilils/common-functions";

const QuetosForm = () => {
  const [amount_product, setAmountProduct] = useState(1);
  const [productList, setProductList] = useState([]);
  const [newItem, setNewItem] = useState({});
  const [itemsProducts, setItemsProducts] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      products: [],
    },
  });

  const watchProduct = watch("product");

  const cbResponse = (res) => {
    setProductList(res.response);
  };

  const getProducts = useCallback(() => {
    get(`${url}/product/`, cbResponse);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onChangeProducts = (option) => {
    if (option) {
      console.log("option", option);

      setNewItem(option);

      setValue('product', {
          price: currencyFormatNumber(option.price),
          subtotal: currencyFormatNumber(option.price * amount_product)
      })
    }
  };

  const addItemProduct = () => {
    // const newItemParse = {
    //     id: newItem.id,
    //     ref: newItem.ref,
    //     name: newItem.name,
    //     price: newItem.price,
    //     amount: amountProduct,
    //     subtotal: newItem.price * amountProduct
    // }
    // Actualizamos el estado del arreglo agregando el nuevo item al arreglo existente
    setItemsProducts([...itemsProducts, newItem]);
  };
  console.log("itemsProducts", itemsProducts);
  const onSubmit = async (data) => {
    try {
      const response = await postAuth(`${url}/queto/create`, data);
      console.log(response);
      if (response === "Cotizacion ya esta registrada") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Queto creado con éxito",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error, inténtalo nuevamente",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error, inténtalo nuevamente",
      });
    }
  };

  const handleAddProduct = () => {
    const products = watch("products");
    products.push({ product_id: "", amount_product: "" });
    setValue("products", products);
  };

  const handleRemoveProduct = (index) => {
    const products = watch("products");
    products.splice(index, 1);
    setValue("products", products);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-120 mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Cotizaciones</h2>

        <div className="mb-4">
          <label
            htmlFor="queto_number"
            className="block text-sm font-medium text-gray-700"
          >
            Numero de cotizacion
          </label>
          <input
            id="queto_number"
            type="text"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("queto_number", {
              required: "El numero de cotizacion es requerido",
            })}
            placeholder="Numero de cotizacion"
          />
          {errors.queto_number && (
            <span className="text-red-500 text-sm">
              {errors.queto_number.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="expiration_queto"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de expiracion
          </label>
          <input
            id="expiration_queto"
            type="date"
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            {...register("expiration_queto", {
              required: "La fecha de expericion es requerida",
            })}
            placeholder="Fecha de expiracion"
          />
          {errors.expiration_queto && (
            <span className="text-red-500 text-sm">
              {errors.expiration_queto.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="user_id"
              className="block text-sm font-medium text-gray-700"
            >
              Usuario
            </label>
            <input
              id="user_id"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("user_id", { required: "El usuario es requerido" })}
              placeholder="Usuario"
            />
            {errors.user_id && (
              <span className="text-red-500 text-sm">
                {errors.user_id.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="client_id"
              className="block text-sm font-medium text-gray-700"
            >
              Cliente
            </label>
            <input
              id="client_id"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("client_id", {
                required: "El cliente es requerido",
              })}
              placeholder="Cliente"
            />
            {errors.client_id && (
              <span className="text-red-500 text-sm">
                {errors.client_id.message}
              </span>
            )}
          </div>
        </div>
        {/* 
        {watch("products").map((product, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`products[${index}].product_id`}
              className="block text-sm font-medium text-gray-700"
            > */}
        {/* Producto {index + 1}
            // </label>
            <input
              type="text"
              placeholder="ID del producto"
              {...register(`products[${index}].product_id`, {
                required: "Ingresa el ID del producto",
              })}
            />
            {errors.products && errors.products[index]?.product_id && (
              <span className="text-red-500 text-sm">
                {errors.products[index].product_id.message}
              </span>
            )}

            <input
              type="text"
              placeholder="Cantidad"
              {...register(`products[${index}].amount_product`, {
                required: "Ingresa la cantidad",
              })}
            />
            {errors.products && errors.products[index]?.amount_product && (
              <span className="text-red-500 text-sm">
                {errors.products[index].amount_product.message}
              </span>
            )} */}

        {/* <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleRemoveProduct(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Eliminar Producto
              </button>
            </div>
          </div>
        ))} */}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Producto
            </label>

            <select
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("products", {
                onChange: (e) => onChangeProducts(JSON.parse(e.target.value)),
              })}
            >
              |<option value="">Seleccione una opción</option>
              {productList.map((product) => {
                return (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Precio
            </label>
            <input
              id="price"
              type="text"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              {...register("product.price", { required: "El precio es requerido" })}
              placeholder="Precio"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Cantidad
            </label>
            <input
              id="amount"
              type="number"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={amount_product}  {...register("amount", { required: "La cantidad es requerido" })} onChange={(e) => setAmountProduct(e.target.value)}
              placeholder="Cantidad"
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">
                {errors.amount.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="subtotal"
              className="block text-sm font-medium text-gray-700"
            >
              Subtotal
            </label>
            <input
              id="subtotal"
              type="txt"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              defaultValue={0} {...register("product.subtotal", {
                required: "El subtotal es requerido",
              })}
              placeholder="Subtotal"
            />
            {errors.subtotal && (
              <span className="text-red-500 text-sm">
                {errors.subtotal.message}
              </span>
            )}
          </div>
        </div>

        {watchProduct && (
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={addItemProduct}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Agregar producto
            </button>
          </div>
        )}

        {itemsProducts.length !== 0 && (
          <div className="table-item-products">
            <h3>Items:</h3>
            <table className="w-full text-left border-t border-b mt-4 mb-10">
              <thead>
                <tr>
                  <th scope="col" className="pt-5 pb-2 px-2">
                    Referencia
                  </th>
                  <th scope="col" className="pt-5 pb-2 px-2">
                    Descripción
                  </th>
                  <th scope="col" className="pt-5 pb-2 px-2">
                    Precio
                  </th>
                  <th scope="col" className="pt-5 pb-2 px-2">
                    Cantidad
                  </th>
                  <th scope="col" className="pt-5 pb-2 px-2">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemsProducts.map((item, index) => (
                  <tr key={item.id}>
                    <td className="pt-2 pb-5 px-2">{item.ref}</td>
                    <td className="pt-2 pb-5 px-2">{item.name}</td>
                    <td className="pt-2 pb-5 px-2">
                      {currencyFormatNumber(item.price)}
                    </td>
                    <td className="pt-2 pb-5 px-2">{item.amount}</td>
                    <td className="pt-2 pb-5 px-2">
                      {currencyFormatNumber(item.subtotal)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          {/* <button
            type="button"
            onClick={handleAddProduct}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Agregar Producto
          </button> */}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Cotizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuetosForm;
