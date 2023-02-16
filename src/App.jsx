import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [TodoText, setTodoText] = useState("");

  const [inCompleteTodos, setinCompleteTodos] = useState(["aaaaa", "iiiii"]);

  // onChangeの関数
  const onchangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    alert();
  };

  return (
    <>
      {/* 上 */}
      <div className="input_area">
        <input
          placeholder="TODOを追加"
          value={TodoText}
          onChange={onchangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 中 */}
      <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list_name">
                  <p>(todo)</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}

          <li>
            <div className="list_name">
              <p>iiiii</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>

      {/* 下 */}
      <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list_name">
              <p>uuuuu</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
