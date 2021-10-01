import React from "react";

const { useState } = React;

const TodoApp = (props) => {
  let initialItems = [
    { key: 0, text: "Learn JavaScript", done: false },
    { key: 1, text: "Learn React", done: false },
    { key: 2, text: "Play around in Codepen", done: true },
    { key: 3, text: "Build something awesome", done: true }
  ];
  const [items, setItems] = useState(initialItems);

  function handleAddItem() {                     
    let newItem = { key: items.length, text: `Do something on ${new Date()}`, done: false };
    setItems([...items, newItem]);
  }
  
  return (
    <div>
      <button className="btn" onClick={handleAddItem}>
        Add item?
      </button>
      <h2>Todos:</h2>
      <TodoList items={items} />
    </div>
  );
}

export default VotePage = ({ items }) => {
  return (
    <ol>
      {items.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>
  )
}

ReactDOM.render(<VotePage />);
