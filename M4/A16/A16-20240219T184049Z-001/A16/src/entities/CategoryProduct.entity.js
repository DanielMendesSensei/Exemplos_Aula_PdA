import { sequelize } from "../database/connection.js";
import { DataTypes, Sequelize } from "sequelize";

export const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});