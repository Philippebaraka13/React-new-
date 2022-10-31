// import { useState } from 'react';
import { useState } from 'react';
import './App.css';



function App() {
  const [item, setItem] = useState("");
  const [getItem, setGetItem] = useState([]);

  const displayItem = () => {
    console.log(item);

    const items = {
      id: Math.floor(Math.random() * 100),
      value: item
    };
setItem("")
setGetItem(oldList => [...oldList, items])
console.log(getItem)
  }
  function deleteItem(id){
    const newArray = getItem.filter(item => item.id !== id)
    setGetItem(newArray);
  }

  return (
    <div>
      <h1>Todo-List</h1>
      <input type="text"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}

      />
      <button onClick={displayItem}>submit</button>
      <ul>
        {getItem.map(item => {
          return(
          <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>Delete</button></li>
          )
        })}
      </ul>
    </div>

  )
}

export default App;
