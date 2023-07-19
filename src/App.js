import "./App.css";
import { bubbleSort } from "./logic/sortLogic";

const sorted = bubbleSort([3, 2, 8, 4, 6, 1, 0, 3, 7, 9]);

function App() {
  return <div className="App">{sorted}</div>;
}

export default App;
