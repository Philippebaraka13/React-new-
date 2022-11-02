import { useState } from 'react';




function Header() {

  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const getTodo = () => {
    if(!todo){
      alert("enter item");
      return;
    }
    console.log(todo);
    const item = {
      id: Math.floor(Math.random() * 100),
      value: todo
    };
    setTodo("")
    setItems(oldList =>[...oldList, item])
    console.log(items)
  }
  function deleteItem(id) {
    const newArray = items.filter(item =>item.id !== id);
    setItems(newArray)
  }

  return (
    <div>
      <h1>Todo List App</h1>
      <input type="text"
        placeholder="Add an Item.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={getTodo}>submit</button>

      <ul>
        {items.map(item =>{
          return(
            <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>Delete</button></li>
          )
        }) }
       
      </ul>


    </div>

  )
}

export default Header;
