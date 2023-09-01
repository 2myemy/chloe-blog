import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import Loader from "../../UI/Loader";

import axios from "axios";

import classes from "./RatingModal.module.css";

const RatingModal = props => {
  const [stars, setStars] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [status, setStatus] = React.useState(true);
  React.useEffect(() => {
    getAllComments();
  }, [props.movie]);

  const handleClose = () => {
    props.handleClose();
  };

  const onCommentChange = event => {
    setComment(event.target.value);
  };

  const onUsernameChange = event => {
    setUsername(event.target.value);
  };

  const onSumbitClick = async () => {
    props.commentSumbit(stars, comment);
    const rate = stars;
    const movie = props.movie;

    console.log(movie);
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");

    const res = await axios("/rate/create", {
      method: "POST",
      data: { movie, rate, comment },
      headers: headers
    });

    if (res.data) {
      console.log(res.data);

      setStars(0);
      setComment("");
      getAllComments();
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
  };

  const getAllComments = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");

    console.log(headers);

    const res = await axios({
      url: `/rate/get/${props.movie}`,
      baseURL: "https://chloe-artache-blog.herokuapp.com",
      method: "GET",
      header: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT"
      }
    });

    if (res.data) {
      setComments(res.data);
      console.log(res.data);
    } else if (res.status == 500) {
      setStatus(false);
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal_box}>
          <div className={classes.modal_rating}>
            <div className={classes.madal_title}>
              <Typography id="modal-title" variant="h5" component="h2">
                <strong>RATE THIS</strong>
              </Typography>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            {/* <TextField
              className={classes.modal_username}
              label="Username"
              variant="outlined"
              onChange={onUsernameChange}
            /> */}
            <Rating
              className={classes.rating_starts}
              name="simple-controlled"
              value={stars}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
            />
            <TextField
              className={classes.modal_commentbox}
              label="Comment"
              multiline
              rows={3}
              placeholder="Plese write your comment here"
              value={comment}
              variant="filled"
              onChange={onCommentChange}
            />
            <div className={classes.modal_sumbitbutton}>
              <Button variant="outlined" onClick={onSumbitClick}>
                Sumbit
              </Button>
            </div>
          </div>
          <div className={classes.comments}>
            {status && Array.isArray(comments) ? (
              comments.length > 0 ? (
                comments.map((comment, index) => {
                  return comment ? (
                    <div key={index} className={classes.comment}>
                      <p>
                        <Rating
                          style={{ fontSize: "1rem" }}
                          name="read-only"
                          value={comment.rate}
                          readOnly
                        />
                        <b> {comment.rate}</b>
                        <br />
                        {comment.comment}
                        <br />
                        {comment.created_date}
                      </p>
                      <div className={classes.division_line}></div>
                    </div>
                  ) : (
                    <div className={classes.loader}>
                      <Loader />
                    </div>
                  );
                })
              ) : (
                <div>No comments are in record.</div>
              )
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RatingModal;
