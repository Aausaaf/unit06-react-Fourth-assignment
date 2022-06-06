import { useState } from "react";

const Todolist = () => {
    const [val, setval] = useState("")
    const [arr, setarr] = useState([])
    
    return (<>
        <h1>TodoList</h1>
        <input value={val} onChange={(e) => {
            setval(e.target.value)
        }} type="text" name="" id="" />

        <button onClick={ 
            () => {
                setarr([...arr, {
                    id: arr.length,
                    value:val
                }])
            }
        }>submit</button>
        <p>{val}</p>
        {
           // console.log(arr)
            arr.map(ar => {
                return (<><li key={ar.id}>{ar.value}</li>
                    <button onClick={() => {
                        setarr((arr.filter(  a =>{
                            return (ar.id != a.id)
                            
                        })))
                       // console.log(a)
                    }}>-</button>
                </>)
            })
        }
        {
            console.log(arr)
        }
    </>);
}
 
export default Todolist;