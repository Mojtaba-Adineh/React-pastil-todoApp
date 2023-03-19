import "./buttonContainer.scss";
import React from 'react';

const ButtonContainer = ({addTask , onChange}) => {
    return (
        <div className="buttonContainer">
          <button onClick={addTask}>Add Task</button>
          <select
            onChange={onChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
    );
};

export default ButtonContainer;