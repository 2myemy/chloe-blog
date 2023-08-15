import React from "react";
import classes from "./KanbanBox.module.css";
import Card from '@mui/material/Card';
import { Draggable, Droppable } from 'react-drag-and-drop'

const KanbanBox = () => {

  const onDrop = data => {
    console.log(data)
  }
  return (
    <div>
      <Card className={classes.task_box}>
        card!!
      </Card>

      <ul>
                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
            </ul>
            <Droppable
                types={['fruit']} // <= allowed drop types
                onDrop={onDrop}>
                <ul className="Smoothie">hiadsoi</ul>
            </Droppable>
    </div>
  );
};

export default KanbanBox;