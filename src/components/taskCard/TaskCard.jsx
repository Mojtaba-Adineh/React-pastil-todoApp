import React, { useState } from "react";
import "./taskCard.scss";
import { Delete, Edit } from "@material-ui/icons";
import CheckBox from "./checkBox/CheckBox";
import EditForm from "./editForm/EditForm";

const TaskCard = ({
  title,
  date,
  onDelete,
  setEditedTaskTitle,
  onSubmit,
  completed,
  onCheck,
}) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="taskCard">
      <div className="left">
        <CheckBox
          onCheck={onCheck}
          title={title}
          editing={editing}
          completed={completed}
        />
        <div className="textContainer">
          {editing ? (
            <EditForm
              title={title}
              onSubmit={onSubmit}
              setEditedTaskTitle={setEditedTaskTitle}
            />
          ) : (
            <>
              <p className={completed ? "title complete" : "title"}>{title}</p>
              <p className="date">{date}</p>
            </>
          )}
        </div>
      </div>
      <div className="right">
        <Delete onClick={onDelete} className="delete" />
        <Edit onClick={() => setEditing(!editing)} className="edit" />
      </div>
    </div>
  );
};

export default TaskCard;
