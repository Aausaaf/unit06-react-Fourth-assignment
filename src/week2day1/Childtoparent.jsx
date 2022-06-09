import React, { useState } from 'react';

 export const Child = (props) => {
     return ( <div><h3>
            Parsent To child state as props
     </h3>
         <p>{props.value}</p>
         <button onClick={props.inc}>+</button>
         <button onClick={props.dec}></button>
     </div>);
 }
  
 

const Parenttochild = () => {
    const [count, setcount] = useState(0)
    const handerler = (c) => {
        setcount(pre => pre+ c )
    }
    return (<>
        <Child value={count}
            inc={() => handerler(1)}
            dec= {()=> handerler(-1)}
        ></Child> 
        
        
    </>);
}
 
export default Parenttochild;