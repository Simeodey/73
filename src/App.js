import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1)
  useEffect(()=>{
    document.title = `Count (${count})`;
  },[count]);
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title"></p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <button onClick={()=>{setCount(prev=>++prev)}}>{`Count (${count})`}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
