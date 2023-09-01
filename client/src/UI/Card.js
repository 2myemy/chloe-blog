import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.css";



const MediaCard = props => {

  const onClick = () => {
    if (props.link.includes('http')) {
      window.open(props.link);
    } else {
      window.location.href = `/portfolio/${props.link}`;
    }
  }

  return (
    <Card className="card-root">
      <CardActionArea>
        <div className="media-container">
          <img className="media" src={props.img} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.contents}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={onClick}
        >
          Enter
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
