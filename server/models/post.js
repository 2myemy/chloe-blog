module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "posts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      contents: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      category: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      create_date: {
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
