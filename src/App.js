
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
       
          <button onClick={() => setCounter((counter) => counter - 1)} > - </button>
          <div >{counter}</div>
          <button onClick={() => setCounter((counter) => counter + 1)} > + </button>
      
     
    </div>
  );
}
