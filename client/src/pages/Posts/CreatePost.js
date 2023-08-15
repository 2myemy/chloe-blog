import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import classes from "./CreatePost.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState("");

  const onCreate = async () => {
    console.log(title);
    console.log(contents);

    if (title.trim() === "") alert("Please type the title");
    else if (contents.trim() === "") alert("Please type contents");

    const res = await axios("/post/create", {
      method: "POST",
      data: { title, contents, category },
      headers: new Headers()
    });

    console.log(res);
  };

  const onBack = () => {
    window.location.href = "/posts";
  }

  return (
    <div className={classes.post_wrapper}>
      <div className={classes.post_create_btn}>
      <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="outlined" onClick={onCreate}>
          Create
        </Button>
      </div>
      <div className={classes.post_title}>
        <TextField
          label="Title"
          variant="outlined"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        </div>
        <div className={classes.post_contents}>
        <TextField
          label="Contents"
          variant="outlined"
          id="contents"
          multiline
          rows={10}
          value={contents}
          onChange={e => setContents(e.target.value)} />
          </div>
          <div className={classes.post_category}>
        <TextField
          label="Category"
          variant="outlined"
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CreatePost;
