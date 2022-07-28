import { Sequelize } from "sequelize";
 
const db = new Sequelize('my-database', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;