import "./enterForm.scss";
import React from 'react';

const EnterForm = ({onSubmit, onChange}) => {
    return (
        <form className="addForm" onSubmit={onSubmit} action="">
          <input
            onChange={onChange}
            type="text"
            placeholder="Enter Task name!"
            autoFocus
          />
          <button type="submit">Enter</button>
        </form>
    );
};

export default EnterForm;