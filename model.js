// const sequelize = require("./models").sequelize;

// const {
//   Users,
//   Posts,
//   Ratings,
//   Sequelize: { Op }
// } = require("./models");
// sequelize.query("SET NAMES utf8;");

// module.exports = {
//   api: {
//     authSignIn: callback => {
//       Users.findAll()
//         .then(result => {
//           callback(result);
//         })
//         .catch(err => {
//           throw err;
//         });
//     },
//     searchInfo: (body, callback) => {
//       Users.findAll({
//         where: { [Op.and]: [{ id: body.id, password: body.password }] }
//       })
//         .then(data => {
//           callback(data);
//         })
//         .catch(err => {
//           throw err;
//         });
//     },
//     createPost: (body, callback) => {
//       console.log(body);
//       Posts.create({
//         title: body.title,
//         contents: body.contents,
//         category: body.category,
//         create_date: new Date()
//       })
//         .then(data => {
//           callback(true);
//         })
//         .catch(err => {
//           console.log(err);
//           callback(false);
//         });
//     },
//     getPost: (body, callback) => {
//       Posts.findAll({
//         limit: body.page * body.limit,
//         offset: (body.page - 1) * body.limit,
//         order: sequelize.literal("id DESC")
//       })
//         .then(data => {
//           callback(data);
//         })
//         .catch(err => {
//           console.log(err);
//           callback(false);
//         });
//     },
//     getPostCnt: callback => {
//       Posts.count().then(result => {
//         callback(result);
//       });
//     },
//     getPostCategory: callback => {
//       Posts.findAll({ attributes: ["category"] }).then(result => {
//         callback(result);
//       });
//     },
//     GetPostById: (body, callback) => {
//       Posts.findAll({
//         where: { id: body.id }
//       })
//         .then(result => {
//           callback(result);
//         })
//         .catch(err => {
//           throw err;
//         });
//     }
//   }
// };
