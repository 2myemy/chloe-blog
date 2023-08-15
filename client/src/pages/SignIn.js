import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { loginUser } from "../reducer/userSlice.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import classes from "./SignIn.module.css";

const SignIn = () => {
  // const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onClickSignIn = async () => {
    const res = await axios('/auth/signIn', {
      method : 'POST',
      data : {id, password},
      headers: new Headers()
      });

      if(res.data) {
        console.log(res.data)
        // dispatch(loginUsesr(res.data[0]));

        localStorage.setItem("name", res.data[0].name);
        localStorage.setItem("id", res.data[0].id);
        window.location.href = '/';
      }

      // if (res.data.code === 200) {
      //   dispatch(loginUser(res.data.userInfo));
      //   window.location.href = process.env.PUBLIC_URL;
      // } else if (res.data.code === 400) {
      //   alert("비어있는 내용입니다.");
      // } else if (res.data.code === 401) {
      //   alert("존재하지 않는 id입니다.");
      // } else if (res.data.code === 402) {
      //   alert("비밀번호가 일치하지 않습니다.");
      // }
  }

  return (
    <form className={classes.container} autoComplete="off">
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.card__title}>
            <Typography variant="h5" component="h2">
              Sign-In
            </Typography>
          </div>
          <TextField
            className={classes.card__textfield}
            id="id"
            label="ID"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <br />
          <TextField
            className={classes.card__textfield}
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardActions className={classes.card__buttons}>
          <Button type="button" onClick={onClickSignIn} variant="contained" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
      <p>&nbsp; &nbsp; <a href="/">Forgot ID</a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;<a href="/signup">Create Account</a></p>
    </form>
  );
};

export default SignIn;
