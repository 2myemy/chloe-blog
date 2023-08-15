import React from "react";
import classes from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch } from "react-redux";
import { ADD_NUM } from "../reducer";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_container}>
        <img
          className={classes.chloe_img}
          src={require("../assets/chloelee.png")}
          alt="Chloe"
        />
      </div>
      <p className={classes.greeting}>
        Hey there, I'm <strong>Chloe!</strong>
      </p>
      <p className={classes.introduction}>
        I'm a web developer who loves to create beautiful websites.
        <br />I can use React.js, Angular, Vue for front-end framework.
        <br />
        I'm so excited to take on new projects with you!
      </p>
      <div>
        <IconButton
          aria-label="Resume"
          onClick={() => {
            window.open(`./Myungyeon_Chloe_Lee_Resume.pdf`);
          }}
        >
          <AssignmentIndIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/the-chloest/");
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="YouTuve"
          onClick={() => {
            window.open("https://www.youtube.com/@jocaldaek");
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
