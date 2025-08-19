import React from "react";
import { TODO_CONSTANTS } from "../constants/common";

type TodoItemProps = {
  item: string;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
}: {
  item: string;
  onDelete: () => void;
}) => {
  return (
    <li className={TODO_CONSTANTS.TODO_ITEM_CLASS}>
      <span>{item}</span>
      <button onClick={onDelete} className={TODO_CONSTANTS.DELETE_BTN_CLASS}>
        {TODO_CONSTANTS.DELETE_BUTTON_LABEL}
      </button>
    </li>
  );
};

export default TodoItem;
