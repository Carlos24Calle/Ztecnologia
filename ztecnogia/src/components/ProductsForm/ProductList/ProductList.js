import React from "react";
const ProductList = (props) => {
  const { productList } = props;
  console.log(productList);

  return (
    <div>
      {productList.length &&
        productList.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-50 border-2 p-10 mb-3"
          >
            <div>
              <strong>Rerencia:</strong> {product.ref}
            </div>
            <div>
              <strong>Nombre del producto:</strong> {product.name}
            </div>
            <div>
              <strong>Marca:</strong> {product.brand}
            </div>
            <div>
              <strong>Cantidad:</strong> {product.amount}
            </div>
            <div>
              <strong>Precio:</strong> {product.price}
            </div>
            <div>
              <strong>Descuento:</strong> {product.discount_price}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
