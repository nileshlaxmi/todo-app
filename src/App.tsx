import { useState } from "react";
import "./App.css";

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
        <h1 className="title">📝 To-Do App</h1>

        <div className="input-section">
          <input
            type="text"
            value={listItem}
            placeholder="Enter a new task..."
            onChange={onItemChange}
            className="todo-input"
          />
          <button onClick={onAddItemClick} className="add-btn">
            Add
          </button>
        </div>

        {list?.length > 0 && (
          <ul className="todo-list">
            {list?.map((item, index) => (
              <li key={index} className="todo-item">
                <span>{item}</span>
                <button
                  onClick={(e) => onItemDelete(index)}
                  className="delete-btn"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
