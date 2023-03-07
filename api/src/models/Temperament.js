const { DataTypes } = require('sequelize') //requerimos de la conn el DataTypes
module.exports = (sequelize) => {
    sequelize.define(
        "temperament",{
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )
};