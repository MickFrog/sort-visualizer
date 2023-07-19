import "./App.css";
import { mergeSort } from "./logic/sortLogic";

function App() {
  return <div className="App">{mergeSort([3, 2, 8, 4, 6, 1, 0, 3, 7, 9])}</div>;
}

export default App;
