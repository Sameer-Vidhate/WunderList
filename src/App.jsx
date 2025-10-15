import Form from "./Components/Form";
import List from "./Components/List";
import Tracker from "./Components/Tracker";

function App() {
  return(
    <div>
      <h1>Wunder List</h1>
      <p>Track your Wonderful tasks</p>
      <Form />
      <List />
      <Tracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;