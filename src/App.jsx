import React, { useState } from "react";
import "./style.css";


export const App = () => {
  // todoリスト
  const [todoText, setTodoText] = useState("");
  // const [nameError, setNameError] = useState("");
  const [todoList, setNewTodoList] = React.useState([]);
  const [radio, setRadio] = React.useState('all');

  // ラジオボタン更新
  const handleChange = (event) => {
    setRadio(event.target.value);
  }

  // インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      comment: todoText,
      status: "作業中"
    }
    // DOMが更新される
    todoList.push(newTodo);
    // 入力フォーム内を""にする
    setTodoText("");
  };

  const onClickChange = (index) => {
    alert("Change!!" + index)
    // if (event.target.value === "作業中") {
    //   setNewTodoList(state => ({...state, status: "完了"}));
    // } else if (event.target.value === "完了") {
    //   setNewTodoList(state => ({...state, status: "作業中"}));
    // }
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
            {todoList.map((todo, index) => (
              <tr>
                <td>{index}</td>
                <td>{todo.comment}</td>
                <td><button onClick={(event) => onClickChange(index)}>{todo.status}</button></td>
                <td><button>削除</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h2>新規タスクの追加</h2>
      <div className="add-todo">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      
    </>
    
  );
}


