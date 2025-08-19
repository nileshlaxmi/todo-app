import React from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  list: string[];
  onItemDelete: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ list = [], onItemDelete }) => {
  return (
    <ul className="todo-list">
      {list?.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDelete={() => onItemDelete(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
