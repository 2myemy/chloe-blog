module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define("rating", {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      movie: {
        type: DataTypes.STRING(100),
        allowNull: false
      },

      comment: {
        type: DataTypes.STRING(100),
        allowNull: true
      },

      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      created_date: {
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

  return Ratings;
};
