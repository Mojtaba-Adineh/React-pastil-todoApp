import React, { useEffect, useState } from "react";
import "./card.scss";
import TaskCard from "../taskCard/TaskCard";
import EnterForm from "./enterForm/EnterForm";
import ButtonContainer from "./buttonContainer/ButtonContainer";

const Card = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [filterButton, setFilterButton] = useState("all");

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(storedTasks);
    }
  }, []);

  const addTask = () => {
    if (filterButton === "all") {
      setShowForm(true);
    } else {
      alert("Please select 'all' in filters!");
    }
  };

  const handleSubmit = (e) => {
    setShowForm(false);

    const currentTask = {
      title: enteredTitle,
      date: getDateAndTime(),
      completed: false,
    };
    setTasks((oldTasks) => [...oldTasks, currentTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, currentTask]));
  };

  const handleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const getDateAndTime = () => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    return time + "," + " " + date;
  };

  const handleDelete = (title) => {
    // const newTasks = tasks.map(task => ({ ...task }));           //cloning
    const newTasks = tasks.filter((task) => task.title !== title);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleEditSubmission = (e) => {

    const editingTasks = tasks.map((task) => ({ ...task }));
    const currentTask = editingTasks.find(
      (task) => task.title == e.currentTarget.name
    );
    const index = editingTasks.indexOf(currentTask);
    const editedTask = { title: editedTaskTitle, date: currentTask.date , completed: false };

    editingTasks[index] = editedTask;
    setTasks(editingTasks);
    localStorage.setItem("tasks", JSON.stringify(editingTasks));

    window.location.reload();
  };

  const handleCheck = (e) => {
    const editingTasks = tasks.map((task) => ({ ...task }));
    const currentTask = editingTasks.find(
      (task) => task.title == e.currentTarget.name
    );
    const index = editingTasks.indexOf(currentTask);

    editingTasks[index].completed = !editingTasks[index].completed;
    setTasks(editingTasks);
    localStorage.setItem("tasks", JSON.stringify(editingTasks));
  };

  const handleFilter = (e) => {
    switch (e.target.value) {
      case "all":
        if (localStorage.getItem("tasks")) {
          const allTasks = JSON.parse(localStorage.getItem("tasks"));
          setTasks(allTasks);
        }
        setFilterButton("all");
        break;
      case "active":
        filterTasks(false);
        setFilterButton("active");
        break;
      case "completed":
        filterTasks(true);
        setFilterButton("completed");
        break;
    }
  };

  const filterTasks = (isCompleted) => {
    if (localStorage.getItem("tasks")) {
      const allTasks = JSON.parse(localStorage.getItem("tasks"));
      const filteredTasks = allTasks.filter(
        (task) => task.completed === isCompleted
      );
      console.log(filteredTasks);
      setTasks(filteredTasks);
    }
  };

  return (
    <>
      {showForm && (
        <EnterForm onChange={handleChange} onSubmit={handleSubmit} />
      )}
      <div className="myCard">
        <ButtonContainer addTask={addTask} onChange={handleFilter} />
        {tasks.length > 0 ? (
          <div className="taskContainer">
            {tasks.map((task) => (
              <TaskCard
                setEditedTaskTitle={setEditedTaskTitle}
                onSubmit={handleEditSubmission}
                onDelete={() => handleDelete(task.title)}
                onCheck={handleCheck}
                key={task.title}
                title={task.title}
                date={task.date}
                completed={task.completed}
              />
            ))}
          </div>
        ) : (
          <p className="taskContainer fw-bold">There is no tasks to display!</p>
        )}
      </div>
    </>
  );
};

export default Card;
