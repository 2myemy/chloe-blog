module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      id: {
        type: DataTypes.STRING(30),
        allowNull: false
      },

      name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },

      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },

      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        defaultValue: 0
      },

      signup_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false
    }
  );
};
