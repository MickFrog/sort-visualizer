import "./App.css";
import { quickSort } from "./logic/sortLogic";

const sorted = quickSort([3, 2, 8, 4, 1, 6, 0, 3, 7, 9]);

function App() {
  return <div className="App">{sorted}</div>;
}

export default App;
