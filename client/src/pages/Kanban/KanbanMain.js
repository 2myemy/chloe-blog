import React, { useState } from "react";
import classes from "./KanbanMain.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { Draggable, Droppable } from "react-drag-and-drop";

import KanbanBox from "./KanbanBox";

const KanbanMain = () => {
  const [doTasks, setDoTasks] = useState([
    {
      id: 1,
      title: "do_1",
      content: "To dodododo"
    },
    {
      id: 2,
      title: "do_2",
      content: "To lalala"
    }
  ]);

  const [progressTasks, setProgressTasks] = useState([
    {
      id: 1,
      title: "progress_1",
      content: "In progresssss1"
    },
    {
      id: 2,
      title: "progress_2",
      content: "INNNN progress2"
    },
    {
      id: 3,
      title: "progress_3",
      content: "INNNN progress3"
    }
  ]);

  const [doneTasks, setDoneTasks] = useState([
    {
      id: 1,
      title: "done_1",
      content: "Done1"
    },
    {
      id: 2,
      title: "done_2",
      content: "Done2"
    },
    {
      id: 3,
      title: "done_3",
      content: "Done3"
    }
  ]);

  const onDropToDo = data => {
    if (data["task"].includes("progress")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = progressTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = progressTasks.filter(e => e["id"] === parseInt(id))[0];
      setProgressTasks(filteredTasks);
      doTasks.push({
        id: doTasks.length + 1,
        title: `do_${doTasks.length + 1}`,
        content: droppedTask["content"]
      });
    } else if (data["task"].includes("done")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = doneTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = doneTasks.filter(e => e["id"] === parseInt(id))[0];
      setDoneTasks(filteredTasks);
      console.log(filteredTasks);
      console.log(droppedTask);
      doTasks.push({
        id: doTasks.length + 1,
        title: `do_${doTasks.length + 1}`,
        content: droppedTask["content"]
      });
    }
    setDoTasks(doTasks);
  };

  const onDropToProgress = data => {
    if (data["task"].includes("do_")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = doTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = doTasks.filter(e => e["id"] === parseInt(id))[0];
      setDoTasks(filteredTasks);
      progressTasks.push({
        id: progressTasks.length + 1,
        title: `progress_${progressTasks.length + 1}`,
        content: droppedTask["content"]
      });
    } else if (data["task"].includes("done")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = doneTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = doneTasks.filter(e => e["id"] === parseInt(id))[0];
      setDoneTasks(filteredTasks);
      progressTasks.push({
        id: progressTasks.length + 1,
        title: `progress_${progressTasks.length + 1}`,
        content: droppedTask["content"]
      });
    }
    setProgressTasks(progressTasks);
  };

  const onDropToDone = data => {
    if (data["task"].includes("do_")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = doTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = doTasks.filter(e => e["id"] === parseInt(id))[0];
      setDoTasks(filteredTasks);
      console.log(filteredTasks);
      console.log(droppedTask);
      doneTasks.push({
        id: doneTasks.length + 1,
        title: `done_${doneTasks.length + 1}`,
        content: droppedTask["content"]
      });
    } else if (data["task"].includes("progress")) {
      let id = data["task"].split("_")[1];
      let filteredTasks = progressTasks.filter(e => e["id"] !== parseInt(id));
      let droppedTask = progressTasks.filter(e => e["id"] === parseInt(id))[0];

      setProgressTasks(filteredTasks);
      doneTasks.push({
        id: doneTasks.length + 1,
        title: `done_${doneTasks.length + 1}`,
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
        id: doTasks.length === 0 ? 1 : doTasks[doTasks.length - 1]["id"] + 1,
        title: `do_${doTasks.length + 1}`,
        content: ""
      }
    ]);
  };

  const onProgressCardClick = event => {
    event.preventDefault();
    setProgressTasks(oldArray => [
      ...oldArray,
      {
        id:
          progressTasks.length === 0
            ? 1
            : progressTasks[progressTasks.length - 1]["id"] + 1,
        title: `progress_${progressTasks.length + 1}`,
        content: ""
      }
    ]);
  };

  const onDoneCardClick = event => {
    event.preventDefault();
    setDoneTasks(oldArray => [
      ...oldArray,
      {
        id:
          doneTasks.length === 0
            ? 1
            : doneTasks[doneTasks.length - 1]["id"] + 1,
        title: `done_${doneTasks.length + 1}`,
        content: ""
      }
    ]);
  };

  const onDoDeleteClick = e => {
    const target = e.target;
    let parent_div = target.parentElement;
    const div_id = parent_div.id;


    console.log(parent_div);
    console.log(div_id);
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
                key={item.id}
                type="task"
                data={item.title}
                id={item.id}
              >
                <Card className={classes.task_box}>
                  <input
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
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
              Add a card
            </Button>
          </Droppable>
        </Card>

        <Card className={classes.box}>
          <Droppable types={["task"]} onDrop={onDropToProgress}>
            <p className={classes.box_title}>In Progress</p>
            {progressTasks.map((item, i) => (
              <Draggable
                key={item.id}
                type="task"
                data={item.title}
                id={item.id}
              >
                <Card className={classes.task_box}>
                  <input
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
                  />
                  <IconButton className={classes.delete_button}>
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
              Add a card
            </Button>
          </Droppable>
        </Card>

        <Card className={classes.box}>
          <Droppable types={["task"]} onDrop={onDropToDone}>
            <p className={classes.box_title}>Done</p>
            {doneTasks.map((item, i) => (
              <Draggable
                key={item.id}
                type="task"
                data={item.title}
                id={item.id}
              >
                <Card className={classes.task_box}>
                  <input
                    className={classes.task_input}
                    type="text"
                    defaultValue={item.content}
                  />
                  <IconButton className={classes.delete_button}>
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
              Add a card
            </Button>
          </Droppable>
        </Card>
      </div>
    </div>
  );
};

export default KanbanMain;
