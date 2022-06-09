import React, { useState } from 'react';

 export const Child = (props) => {
     return ( <div><h3>
            Parsent To child state as props
     </h3>
         <p>{props.value}</p>
     </div>);
 }
  
 

const Childtoparent = () => {
   const [count, setcount] = useState(0)
    return (<>
        <Child value={count}></Child> 
        <button onClick={() => {
            setcount(pre=> pre+1)
        }}>+</button>
           <button onClick={() => {
            setcount(pre=> pre-1)
        }}>-</button>
        
    </>);
}
 
export default  Childtoparent;