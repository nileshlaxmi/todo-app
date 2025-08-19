import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TODO_CONSTANTS } from "./constants/common";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [listItem, setListItem] = useState<string>("");

  const onItemChange = (e: any) => {
    setListItem(e.target.value);
  };

  const onAddItemClick = () => {
    setList([...list, listItem]);
    setListItem("");
  };

  const onItemDelete = (index: number) => {
    const updatedList = list.filter((item, idx) => idx !== index);
    setList(updatedList);
    setListItem("");
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">{TODO_CONSTANTS.TODO_APP_TITLE}</h1>

        <TodoInput
          listItem={listItem}
          onItemChange={onItemChange}
          onAddItemClick={onAddItemClick}
        />

        {list?.length > 0 && (
          <TodoList list={list} onItemDelete={onItemDelete} />
        )}
      </div>
    </>
  );
}

export default App;
