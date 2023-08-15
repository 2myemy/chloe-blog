// const model = require("./model");

// module.exports = {
//   needs: () => upload,
//   api: {
//     authSignIn: (req, res) => {
//       model.api.searchInfo(req.body, result => {
//         if (result.length > 0) {
//           console.log(result);
//           return res.send(result);
//         }
//       });
//     },
//     postCreate: (req, res) => {
//       console.log(req.body);
//       model.api.createPost(req.body, result => {
//         if (result) {
//           res.send(true);
//         } else {
//           res.send(false);
//         }
//       });
//     },
//     postGet: (req, res) => {
//       console.log(req.body);
//       model.api.getPost(req.body, result => {
//         if (result) {
//           res.send(result);
//         } else {
//           res.send(false);
//         }
//       });
//     },
//     postGetCnt: (req, res) => {
//       model.api.getPostCnt(cnt => {
//         const result = { cnt : cnt }
//         res.send(result)
//       })
//     },
//     postGetCategory: (req, res) => {
//       model.api.getPostCategory(category => {
//         const result = { category : category }
//         res.send(result)
//       })
//     },
//     postGetById : (req, res) => {
//       const body = req.body;

//       model.api.GetPostById(body, data => {
//         const result = { data : data }
//         res.send(result)
//       })
//     }
//   }
// };

const db = require("./models");
const Rating = db.Ratings;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

module.exports = {
  rate: {
    create: (req, res) => {
      // Validate request

      if (!req.body.movie) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      // Create a Rating comment
      const rating = {
        movie: req.body.movie,
        rate: req.body.rate,
        comment: req.body.comment,
        created_date: new Date()
      };

      // Save Rating in the database
      Rating.create(rating)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    },
    findAll: (req, res) => {
      const movie = req.params.movie;
      var condition = movie ? { movie: { [Op.like]: `%${movie}%` } } : null;
      Rating.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving comments."
          });
        });
    }
  }
};
