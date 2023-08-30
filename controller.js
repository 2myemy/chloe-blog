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
