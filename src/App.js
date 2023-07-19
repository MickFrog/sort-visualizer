import "./App.css";
import { insertionSort } from "./logic/sortLogic";

const sorted = insertionSort([3, 2, 8, 4, 6, 1, 0, 3, 7, 9]);

function App() {
  return <div className="App">{sorted}</div>;
}

export default App;
