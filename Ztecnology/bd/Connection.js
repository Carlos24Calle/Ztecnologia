const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ztechnology", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

//  const testConnetion = async () => {
//    try {
//      await sequelize.authenticate();
//      console.log("Connection has been established successfully.");
//    } catch (error) {
//      console.error("Unable to connect to the database:", error);
//    }
//  };
//   testConnetion();
//  const createTables= async()=>{
//   await User.sync()
//  }
//  createTables();

module.exports = sequelize;
