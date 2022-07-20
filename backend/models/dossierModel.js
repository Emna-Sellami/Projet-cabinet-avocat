import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Dossier = db.define('dossiers',{
    section:{
        type: DataTypes.STRING
    },
    client:{
        type: DataTypes.STRING
    },
    adversaire:{
        type: DataTypes.STRING
    },
    avocatAdversaire:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true
});
 
export default Dossier;