import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [item, setItem] = useState("");
  const [saveItem, setSaveItem] = useState([]);

  const getItem = () => {

    const items = {
      id: Math.floor(Math.random() * 100),
      value: item
    }
    setSaveItem(oldList => [...oldList, items])
    setItem("");

  }
  function deleteItem(id) {
    const deleteArray = saveItem.filter(item => item.id !== id)
    setSaveItem(deleteArray);
  }

  return (
    <div>
      <input type="text" placeholder='Enter item' value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={getItem}>submit</button>
      <ul>
        {saveItem.map(item => {
          return (
            <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>delete</button></li>
          )
        }
        )}

      </ul>

    </div>
  )
}

export default App;
