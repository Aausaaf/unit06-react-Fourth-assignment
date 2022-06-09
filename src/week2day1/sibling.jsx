import React, { useState } from 'react';

export const Child = (props) => {
    return (
        <div>
            <h1>Counter using sibling components </h1>
            <p>{props.value}</p>
        </div>
    )
    
}
 export const Button = (props) => {
     return (<>
         <button onClick={props.inc}>+</button>
         <button onClick={props.dec}>-</button>
    </> );
}
 
 
<>
</>

const Slibling = () => {
    const [count, setcount] = useState(0)
        const handerler = (c) => {
        setcount(pre => pre+ c )
    }
    return (<>
        <Child value={count}></Child>
        <Button inc={() => handerler(1)}
            dec ={() => handerler(-1)}
        ></Button>
        </>
      );
}
 
export default Slibling;