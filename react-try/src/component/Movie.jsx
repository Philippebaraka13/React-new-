import { useState } from 'react';
import Display from './Display';
function Movie() {
    const [show, setShow] = useState([
        {
            name: "Philippe",
            id: 1,
            price: "$10"
        },
        {
            name: "Andrew",
            id: 2,
            price: "$20"
        },
        {
            name: "David",
            id: 3,
            price: "$30"
        }
    ]);
const deleteUser = (id) => {
    const arrayDelete = show.filter(item => item.id !== id);
    setShow(arrayDelete);
}
    return (
        <div>
         <h1>{show.map(person =>{
            return (
                <div>
               <Display name={person.name} price={person.price} key={person.id} /><button
                onClick={() =>deleteUser(person.id)}>Delete</button>
               </div>
            )
         })}</h1>
        </div>
    )

}
export default Movie;