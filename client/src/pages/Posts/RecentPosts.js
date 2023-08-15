import React from "react";
import classes from "./RecentPosts.module.css";
import Loader from "../../UI/Loader";

const RecentPosts = props => {
  const posts = props.posts;
  const post_link = i => {
    return `posts/${i}`;
  };
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => {
          return post ? (
            <div key={index} className={classes.post}>
              <h2>
                <a className={classes.post_title} href={post_link(post.id)}>
                  {post.title}
                </a>
              </h2>
              <p className={classes.post_date}>{post.create_date}</p>
              <p className={classes.post_contents}>
                {post.contents.length > 50
                  ? post.contents.substr(0, 50) + " ..."
                  : post.contents}
              </p>
            </div>
          ) : (
            <div className={classes.loader}>
              <Loader />
            </div>
          );
        })
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
