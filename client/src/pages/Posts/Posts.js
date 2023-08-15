import React, { useState, useEffect } from "react";
import Category from "./Category";
import RecentPosts from "./RecentPosts";
import axios from "axios";
import BasicPagination from "../../UI/Pagination";

import classes from "./Posts.module.css";

const Posts = () => {
  const [category, setCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const onCreatePost = () => {
    window.location.href = "/posts/create";
  };

  const getPostCnt = async () => {
    const res = await axios("/post/get_cnt", {
      method: "GET",
      headers: new Headers()
    });

    console.log(res.data);
    if (res.data && res.data.cnt) {
      setTotalPage(Math.ceil(res.data.cnt / 10));
    }
  };

  const getPosts = async page => {
    const res = await axios("/post/get_page", {
      method: "POST",
      headers: new Headers(),
      data: { limit: 10, page: page }
    });

    console.log(res.data);
    if (res.data.length > 0) {
      setPosts(res.data.map(e => e));
    }
  };

  const getPostCategory = async () => {
    const res = await axios("/post/get_category", {
      method: "GET",
      headers: new Headers()
    });

    console.log(res.data.category);
    setCategory(res.data.category.map(e => e.category));
  };

  useEffect(() => {
    getPostCnt();
    getPosts(1);
    getPostCategory();
  }, []);

  const onPageChange = page => {
    getPosts(page);
    console.log(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.category_wrapper}>
        <Category category={category} />
      </div>

      <div className={classes.post_wrapper}>
        <h2>Recent Posts</h2>
        <button
          className={classes.post_wrapper__create_button}
          onClick={onCreatePost}
        >
          Create a post
        </button>
        <RecentPosts posts={posts} />
        <div className={classes.pagination_wrapper}>
          <BasicPagination totalPage={totalPage} onPageChange={onPageChange} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
