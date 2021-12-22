import React, { useState } from "react";
import "./style.css";


export const App = () => {
  const [text, setText] = useState('');
  const [radio, setRadio] = React.useState('all');

  // ラジオボタン更新
  const handleChange = (event) => {
    setRadio(event.target.value);
  }

  // // インプットフォーム
  // const addTodo = document.getElementById("addTodo").value;
  
  
  // const onClickAdd = () => {
  //   alert(addTodo);
  // }

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
        <ul>
          <li>ああああ</li>
          <li>いいいい</li>
        </ul>
      </div>
      
      <div className="add-todo">
        <h2>新規タスクの追加</h2>
        <input value={text} type="text" />
        <button onClick>追加</button>
      </div>
      
    </>
    
  );
}


