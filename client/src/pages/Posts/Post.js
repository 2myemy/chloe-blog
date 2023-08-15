import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Loader from "../../UI/Loader";
import classes from "./Post.module.css";

import axios from "axios";

const Post = () => {
  const [postData, setPostData] = useState(null);
  const params = useParams();
  const post_id = params.postid;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const res = await axios("/post/get_by_id", {
      method: "POST",
      headers: new Headers(),
      data: { id: post_id }
    });

    console.log(res.data.data[0]);
    setPostData(res.data.data[0]);
  };

  const onBackClick = () => {
    window.location.href = "/posts";
  }

  return (
    <div className={classes.post_wrapper}>
      <div className={classes.back_btn}>
        <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />} onClick={onBackClick}>
          Back
        </Button>
      </div>
      {postData ? (
        <div className={classes.post}>
          <h2>{postData.title}</h2>
          <div>
            <p className={classes.post_date}>{postData.create_date}</p>
            <p>{postData.contents}</p>
          </div>
        </div>
      ) : (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Post;
