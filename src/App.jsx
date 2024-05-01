import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // deps 값이 없음 -> 컴포넌트가 처음 마운드 될 때 이후에는 다시 실행되지 않음

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // deps 생략 -> 마운트 될 때 한 번, 컴포넌트 리렌더링 될 때마다 실행됨
  // 생략한 이유는 컴포넌트에 state가 많다면 하나하나 적어주면 길어지니까?
  // 생략 == 모든 state 인듯?
  // 마운트 될 때 실행 제외시키고 싶으면 useRef를 이용해서 mount 여부 체크

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
