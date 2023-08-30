import React, { useState, useRef } from "react";
import classes from "./KanbanMain.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { Draggable, Droppable } from "react-drag-and-drop";

const KanbanMain = () => {
  const draggableRef = useRef();

  const [doTasks, setDoTasks] = useState([
    {
      id: taskidGenerator(),
      type: "do",
      content: "Add priority to a Kanban board task"
    },
    {
      id: taskidGenerator(),
      type: "do",
      content: "Fix Kanban board task ordering"
    }
  ]);

  const [progressTasks, setProgressTasks] = useState([
    {
      id: taskidGenerator(),
      type: "progress",
      content: "Add Redux to chloe-blog project"
    }
  ]);

  const [doneTasks, setDoneTasks] = useState([
    {
      id: taskidGenerator(),
      type: "done",
      content: "Add Home page on chloe-blog project"
    }
  ]);

  function taskidGenerator() {
    return Math.random()
      .toString(36)
      .substring(2, 8);
  }

  const onDropToDo = data => {
    const task = JSON.parse(data.task);
    if (task.type == "progress") {
      let id = task.id;
      let filteredTasks = progressTasks.filter(e => e["id"] !== id);
      let droppedTask = progressTasks.filter(e => e["id"] === id)[0];
      setProgressTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      doTasks.push({
        id: taskidGenerator(),
        type: `do`,
        content: droppedTask["content"]
      });
    } else if (task.type == "done") {
      let id = task.id;
      let filteredTasks = doneTasks.filter(e => e["id"] !== id);
      let droppedTask = doneTasks.filter(e => e["id"] === id)[0];
      setDoneTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      doTasks.push({
        id: taskidGenerator(),
        type: `do`,
        content: droppedTask["content"]
      });
    }
    setDoTasks(doTasks);
  };

  const onDropToProgress = data => {
    const task = JSON.parse(data.task);
    if (task.type == "do") {
      let id = task.id;
      let filteredTasks = doTasks.filter(e => e["id"] !== id);
      let droppedTask = doTasks.filter(e => e["id"] === id)[0];
      setDoTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      progressTasks.push({
        id: taskidGenerator(),
        type: "progress",
        content: droppedTask["content"]
      });
    } else if (task.type == "done") {
      let id = task.id;
      let filteredTasks = doneTasks.filter(e => e["id"] !== id);
      let droppedTask = doneTasks.filter(e => e["id"] === id)[0];
      setDoneTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      progressTasks.push({
        id: taskidGenerator(),
        type: "progress",
        content: droppedTask["content"]
      });
    }
    setProgressTasks(progressTasks);
  };

  const onDropToDone = data => {
    const task = JSON.parse(data.task);
    if (task.type == "do") {
      let id = task.id;
      let filteredTasks = doTasks.filter(e => e["id"] !== id);
      let droppedTask = doTasks.filter(e => e["id"] === id)[0];
      setDoTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      doneTasks.push({
        id: taskidGenerator(),
        type: "done",
        content: droppedTask["content"]
      });
    } else if (task.type == "progress") {
      let id = task.id;
      let filteredTasks = progressTasks.filter(e => e["id"] !== id);
      let droppedTask = progressTasks.filter(e => e["id"] === id)[0];
      setProgressTasks(filteredTasks);

      console.log(filteredTasks);
      console.log(droppedTask);

      doneTasks.push({
        id: taskidGenerator(),
        type: `done`,
        content: droppedTask["content"]
      });
    }
    setDoneTasks(doneTasks);
  };

  const onDoCardClick = event => {
    event.preventDefault();
    setDoTasks(oldArray => [
      ...oldArray,
      {
        id: taskidGenerator(),
        type: "do",
        content: ""
      }
    ]);
    console.log(doTasks);
  };

  const onProgressCardClick = event => {
    event.preventDefault();
    setProgressTasks(oldArray => [
      ...oldArray,
      {
        id: taskidGenerator(),
        type: "progress",
        content: ""
      }
    ]);
    console.log(progressTasks);
  };

  const onDoneCardClick = event => {
    event.preventDefault();
    setDoneTasks(oldArray => [
      ...oldArray,
      {
        id: taskidGenerator(),
        type: "done",
        content: ""
      }
    ]);

    console.log(doneTasks);
  };

  const onDoDeleteClick = e => {
    const target = e.target;
    let parent_div = target.parentElement.parentElement.parentElement;
    const div_id = parent_div.id;
    let filteredTasks = doTasks.filter(e => e["id"] !== div_id);
    setDoTasks(filteredTasks);

    console.log(doTasks);
  };

  const onProgressDeleteClick = e => {
    const target = e.target;
    let parent_div = target.parentElement.parentElement.parentElement;
    const div_id = parent_div.id;
    let filteredTasks = progressTasks.filter(e => e["id"] !== div_id);
    setProgressTasks(filteredTasks);

    console.log(progressTasks);
  };

  const onDoneDeleteClick = e => {
    const target = e.target;
    let parent_div = target.parentElement.parentElement.parentElement;
    const div_id = parent_div.id;
    let filteredTasks = doneTasks.filter(e => e["id"] !== div_id);
    setDoneTasks(filteredTasks);

    console.log(doneTasks);
  };

  const doTaskboxChange = e => {
    let filteredTask = doTasks.filter(task => task.id == e.target.id)[0];
    filteredTask.content = e.target.value;
    setDoTasks(doTasks);
  };

  const progressTaskboxChange = e => {
    let filteredTask = progressTasks.filter(task => task.id == e.target.id)[0];
    filteredTask.content = e.target.value;
    setProgressTasks(progressTasks);
  };

  const doneTaskboxChange = e => {
    let filteredTask = doneTasks.filter(task => task.id == e.target.id)[0];
    filteredTask.content = e.target.value;
    setDoneTasks(doneTasks);
  };

  return (
    <div>
      <p className={classes.title}>Kanban Board</p>
      <div className={classes.box_wrapper}>
        <Card className={classes.box}>
          <Droppable types={["task"]} onDrop={onDropToDo}>
            <p className={classes.box_title}>To Do</p>
            {doTasks.map((item, i) => (
              <Draggable
                ref={draggableRef}
                key={item.id}
                type="task"
                data={JSON.stringify(item)}
                id={item.id}
                task_type="do"
              >
                <Card className={classes.task_box}>
                  <textarea
                    id={item.id}
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
                    onChange={doTaskboxChange}
                  />
                  <IconButton
                    className={classes.delete_button}
                    onClick={onDoDeleteClick}
                  >
                    <ClearIcon />
                  </IconButton>
                </Card>
              </Draggable>
            ))}
            <Button
              className={classes.add_button}
              startIcon={<AddIcon />}
              onClick={onDoCardClick}
            >
              Add a task
            </Button>
          </Droppable>
        </Card>

        <Card className={classes.box}>
          <Droppable types={["task"]} onDrop={onDropToProgress}>
            <p className={classes.box_title}>In Progress</p>
            {progressTasks.map((item, i) => (
              <Draggable
                ref={draggableRef}
                key={item.id}
                type="task"
                data={JSON.stringify(item)}
                id={item.id}
                task_type="progress"
              >
                <Card className={classes.task_box}>
                  <textarea
                    id={item.id}
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
                    onChange={progressTaskboxChange}
                  />
                  <IconButton
                    className={classes.delete_button}
                    onClick={onProgressDeleteClick}
                  >
                    <ClearIcon />
                  </IconButton>
                </Card>
              </Draggable>
            ))}
            <Button
              className={classes.add_button}
              startIcon={<AddIcon />}
              onClick={onProgressCardClick}
            >
              Add a task
            </Button>
          </Droppable>
        </Card>

        <Card className={classes.box}>
          <Droppable types={["task"]} onDrop={onDropToDone}>
            <p className={classes.box_title}>Done</p>
            {doneTasks.map((item, i) => (
              <Draggable
                ref={draggableRef}
                key={item.id}
                type="task"
                data={JSON.stringify(item)}
                id={item.id}
                task_type="done"
              >
                <Card className={classes.task_box}>
                  <textarea
                    id={item.id}
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
                    onChange={doneTaskboxChange}
                  />
                  <IconButton
                    className={classes.delete_button}
                    onClick={onDoneDeleteClick}
                  >
                    <ClearIcon />
                  </IconButton>
                </Card>
              </Draggable>
            ))}
            <Button
              className={classes.add_button}
              startIcon={<AddIcon />}
              onClick={onDoneCardClick}
            >
              Add a task
            </Button>
          </Droppable>
        </Card>
      </div>
    </div>
  );
};

export default KanbanMain;
