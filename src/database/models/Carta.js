module.exports = (sequelize, DataTypes) => {
    const Carta = sequelize.define('Carta', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre_carta: {
          type: DataTypes.STRING(50),
          allowNull: false
        }
      },
      {
        tableName: 'cartas',
        timestamps: false,

      });
      return Carta;
    }