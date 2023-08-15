"use strict";

const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "config", "db.json"))[env];
const db = {};

let sequelize = new Sequelize(
  "heroku_0b231b8af259ee9",
  "b298259ab733d3",
  "0b0622fd",
  {
    "username": "b298259ab733d3",
    "password": "0b0622fd",
    "database": "heroku_0b231b8af259ee9",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": "3306",
    "dialect": "mysql"
  },
  {
    define: {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database: ", err);
  });


db.Users = require("./user")(sequelize, Sequelize);
db.Posts = require("./post")(sequelize, Sequelize);
db.Ratings = require("./rating")(sequelize, Sequelize);

db.secret = "(9*)5$&!3%^0%^@@2$1!#5@2!4";
module.exports = db;
