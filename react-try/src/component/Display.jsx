import { useState } from 'react';

function Display({name, price}) {
    

    return (
    <div>
      <h3>{name} {price}</h3>  
    </div>
    )

}
export default Display;