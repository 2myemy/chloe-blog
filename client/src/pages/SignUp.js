import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <form className={classes.form__container} autoComplete="off">
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.card__title}>
            <Typography variant="h5" component="h2">
              Sign-Up
            </Typography>
          </div>
          <TextField
            className={classes.card__textfield}
            id="email"
            label="Email Address"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            className={classes.card__textfield}
            id="id"
            label="ID"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            className={classes.card__textfield}
            id="password"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            className={classes.card__textfield}
            id="passwordConfirm"
            label="Password Confirm"
            variant="outlined"
          />
        </CardContent>
        <CardActions className={classes.card__buttons}>
          <Button variant="contained" color="primary">Create Account</Button>
          </CardActions>
      </Card>
    </form>
  );
};

export default SignUp;
