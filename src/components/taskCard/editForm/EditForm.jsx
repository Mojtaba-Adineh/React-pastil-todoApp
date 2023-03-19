import "./editForm.scss";
import React from "react";

const EditForm = ({title , onSubmit , setEditedTaskTitle}) => {
  return (
    <form name={title} className="editForm" onSubmit={onSubmit} action="">
      <input
        autoFocus
        placeholder="Edit your task"
        className="editInput"
        type="text"
        onChange={(e) => setEditedTaskTitle(e.currentTarget.value)}
      />
    </form>
  );
};

export default EditForm;
