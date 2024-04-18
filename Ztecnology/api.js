const express = require("express");


  //Routes
  // const homeApi = require("./routes/api/");
  const authApi = require("./routes/api/Auth");
  const userdetailApi = require("./routes/api/UsersDetails");
  const clientsApi = require("./routes/api/Clients");
  const productsApi = require("./routes/api/Products");
  const rolesApi = require("./routes/api/Roles");
  const QuetoApi = require("./routes/api/Quetos");
  const usersApi = require("./routes/api/Users");
 


const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));
  app.use("/api/v1", baseRoute);


  baseRoute.use("/users", usersApi);
  baseRoute.use("/auth", authApi);
  baseRoute.use("/product", productsApi);
  baseRoute.use("/Queto", QuetoApi);
  baseRoute.use("/roles", rolesApi);
  baseRoute.use("/clients", clientsApi);
  baseRoute.use("/userdetail", userdetailApi);
}

  module.exports = routers






















  // baseRoute.use("/clients",clientsApi)
// };
// module.exports = routers
// const express = require("express")
// //Import Routes
// const homeApi = require("./api/index");
//   const authApi = require("./api/auth");
//   const categoryProductsApi = require("./api/categoryProducts");
//   const clientsApi = require("./api/clients");
//   const productsApi = require("./api/products");
//   const rolesApi = require("./api/roles");
//   const salesApi = require("./api/sales");
//   const usersApi = require("./api/users");

//   const routers = (app) =>{
//     const baseRoute = express.Router()
//     app.use(express.static('public'))
//     app.use('/api/v1',baseRoute)

//   baseRoute.use(homeApi);
//   baseRoute.use("/auth", authApi);
//   baseRoute.use("/products", productsApi);
//   baseRoute.use("/categoryProducts", categoryProductsApi);
//   baseRoute.use("/roles",rolesApi);
//   baseRoute.use("/clients",clientsApi)

