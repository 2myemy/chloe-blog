import MediaCard from "../UI/Card";
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={classes.portfolio__wrapper}>
      <div className={classes.portfolio__cardrow}>
        <MediaCard img={require("../assets/kanban.png")} title="Kanban" contents="Kanban board" link="kanban" className={classes.portfolio__card}/>
        <MediaCard img={require("../assets/rating.png")} title="Rating" contents="Rating system" link="rating" className={classes.portfolio__card}/>
        <MediaCard img={require("../assets/algorithm.png")} title="Algorithm" contents="Algorithm study" link="https://2myemy.github.io/categories/algorithm/" className={classes.portfolio__card}/>
        {/* <MediaCard img={require("../assets/rating.png")} title="Rating" contents="Rating system" link="rating" className={classes.portfolio__card}/> */}
        {/* <MediaCard className={classes.portfolio__card} />
        <MediaCard className={classes.portfolio__card} /> */}
      </div>
      {/* <div className={classes.portfolio__cardrow}>
        <MediaCard className={classes.portfolio__card} />
        <MediaCard className={classes.portfolio__card} />
        <MediaCard className={classes.portfolio__card} />
      </div> */}
    </div>
  );
};

export default Portfolio;
