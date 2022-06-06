import React, { useReducer } from 'react';

const initalval = 0
const reducer = (state, action) => {
    switch (action)
    {
        case 'incement': 
            return state + 1
        case 'decement': 
            return state - 1
        
    }

}


function Testreducer(){
    const [dat, dispatch] = useReducer(reducer, initalval)
    
    return (<>
        <h1>Reducer</h1>
        <h1>{dat}</h1>
        <button onClick={() => dispatch('incement')}>ince</button>
        <button onClick={() => dispatch('decement')}>Dece</button>
    </>);
}
 
export default Testreducer;