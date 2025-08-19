import React from "react";
import { TODO_CONSTANTS } from "../constants/common";

type TodoInputProps = {
  listItem: string;
  onItemChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItemClick: () => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ listItem, onItemChange, onAddItemClick }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        value={listItem}
        placeholder="Enter a new task..."
        onChange={onItemChange}
        className="todo-input"
      />
      <button onClick={onAddItemClick} className="add-btn">
        {TODO_CONSTANTS.ADD_BUTTON_LABEL}
      </button>
    </div>
  );
}

export default TodoInput;