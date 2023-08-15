import React, { useState } from "react";
import classes from "./Rating.module.css";

import RatingModal from "./RatingModal";

const Rating = () => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('harrypotter');
  const onImageClick = title => {
    setTitle(title);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  const commentSumbit = (stars, comment) => {
  }

  return (
    <div>
      <p className={classes.title}>Rate your favorite movies</p>
      <div className={classes.poster_container}>
        <div className={classes.poster_div} onClick={() => onImageClick("harrypotter")}>
          <img className={classes.poster_img} src={require("../../assets/harrypotter.jpg")} alt="Harrypotter poster" />
        </div>
        <div className={classes.poster_div} onClick={() => onImageClick("gravity")}>
          <img className={classes.poster_img} src={require("../../assets/gravity.jpg")} alt="Gravity poster" />
        </div>
        <div className={classes.poster_div} onClick={() => onImageClick("joker")}>
          <img className={classes.poster_img} src={require("../../assets/joker.jpg")} alt="Joker poster" />
        </div>
        <RatingModal movie={title} open={open} handleClose={handleClose} commentSumbit={commentSumbit}/>
      </div>
      
    </div>
  );
};

export default Rating;
