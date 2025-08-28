import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
    setText("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
}

export default App;
