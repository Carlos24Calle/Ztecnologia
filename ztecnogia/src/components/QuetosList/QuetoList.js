import React from "react";
import { currencyFormatNumber } from "../../utilils/common-functions";
const QuetoList = (props) => {
  const { quetosList } = props;
  console.log(quetosList);

  return (
    <div>
      {quetosList.length &&
        quetosList.map((quetos, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-50 border-2 p-10 mb-3"
          >
            <div>
              <strong>Numero de cotizacion:</strong> {quetos.queto_number}
            </div>
            <div>
              <strong>Fecha de expiracion:</strong> {quetos.expiration_queto}
            </div>
            <div>
              <strong>Usuario:</strong> {quetos.user.userdetail.firs_name} {quetos.user.userdetail.last_name}
            </div>
            <div>
              <strong>Cliente:</strong> {quetos.client.first_name} {quetos.client.last_name}
            </div>
            <div>
              <strong>Productos:</strong>
              <div className="table-item-products">
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
                    {quetos.products.map((item, index) => (
                      <tr key={item.id}>
                        <td className="pt-2 pb-5 px-2">{item.ref}</td>
                        <td className="pt-2 pb-5 px-2">{item.name}</td>
                        <td className="pt-2 pb-5 px-2">
                          {currencyFormatNumber(item.price)}
                        </td>
                        <td className="pt-2 pb-5 px-2">{item.QuetoProduct.amount_product}</td>
                        <td className="pt-2 pb-5 px-2">
                          {currencyFormatNumber(item.price * item.QuetoProduct.amount_product)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuetoList;
