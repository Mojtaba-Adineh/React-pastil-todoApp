import "./checkBox.scss";
import React from 'react';

const CheckBox = ({onCheck , title , editing , completed}) => {
    
    return (
        <div className="form-check">
          <input
            onClick={onCheck}
            className="form-check-input"
            type="checkbox"
            id="done"
            name={title}
            value="something"
            disabled={editing}
            checked={completed}
          />
        </div>
    );
};

export default CheckBox;