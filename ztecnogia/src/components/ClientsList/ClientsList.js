import React from "react";
const ClientsList = (props) => {
  const { clientList } = props;
  console.log(clientList);
  return (
    <div>
      {clientList.length &&
        clientList.map((client, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-50 border-2 p-10 mb-3"
          >
            <div>
              <strong>Tipo de documento:</strong> {client.type_document}
            </div>
            <div>
              <strong>Numero de documento:</strong> {client.number_document}
            </div>
            <div>
              <strong>Nombre:</strong> {client.first_name}
            </div>
            <div>
              <strong>Apellido:</strong> {client.last_name}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ClientsList;
