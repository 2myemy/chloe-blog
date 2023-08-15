import React from "react";
import classes from "./Category.module.css";

const Category = props => {
  const category = props.category;
  const category_unique = [... new Set(category)];

  const category_link = i => {
    return `#${i}`;
  };

  return (
    <div className={classes.category_wrapper}>
      <h2>Category</h2>
      <div className={classes.categories}>
        {category_unique.length > 0 ? (
          category_unique.map((e, i) => {
            return (
              <div className={classes.category} key={i}>
                <a className={classes.category_link} href={category_link(i)}>
                  {e}
                </a>
              </div>
            ) ;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Category;
