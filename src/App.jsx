import React, { useState } from "react";
import "./style.css";


export const App = () => {
  // todoリスト
  const [todos, setTodos] = React.useState([
    { id: 1, title: "ああああ", status: "すべて" },
    { id: 2, title: "いいいい", status: "作業中" },
    { id: 3, title: "うううう", status: "完了" }
  ]);
  const [radio, setRadio] = React.useState('all');

  // ラジオボタン更新
  const handleChange = (event) => {
    setRadio(event.target.value);
  }

  // インプットフォーム
  const addTodo = () => {
    const newTodo = document.getElementById('inputNewTodo').value;
  }

  return (
    <>
      <div className="complete-area">
        <label>
          <input type="radio" value="all" onChange={handleChange} checked={radio === 'all'} />
          すべて
        </label>

        <label>
          <input type="radio" value="incomplete" onChange={handleChange} checked={radio === 'incomplete'} />
          作業中
        </label>

        <label>
          <input type="radio" value="complete" onChange={handleChange} checked={radio === 'complete'} />
          完了
        </label>


        <h1>ToDoリスト</h1>
        <table>
          <thead>
            <tr>
              <td >ID</td>
              <td>コメント</td>
              <td>状態</td>
            </tr>
          </thead>
          <tbody id="todo-body">
            {todos.map(todo => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h2>新規タスクの追加</h2>
      <div className="add-todo">
        <input id="inputNewTodo" type="text" />
        <button type="submit" onClick={addTodo}>追加</button>
      </div>
      
    </>
    
  );
}


