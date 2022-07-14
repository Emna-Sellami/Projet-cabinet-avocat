import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Client = db.define('clients',{
    nom:{
        type: DataTypes.STRING
    },
    adresse:{
        type: DataTypes.STRING
    },
    telephone:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default Client;