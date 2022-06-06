import { useState } from "react"

export const Counter = () => {
    const[val,setval] = useState(0)
 
    
    
    const style = {
        color:'red',
    }
    const styles = {
        color:'green',
    }
   
    return(
        <>
       {
           (val%2==0)? <p className="p1" style={style} >{val}</p> :  <p className="p2" style={styles} >{val}</p>
       }
        <button className="inc" onClick={()=> {
            let tem = val
            setval(tem+1)
        }}>Inc By 1</button>
        <button className="inc2" onClick={()=> {
            let tem = val
        
            setval(tem+2)
        }}>Inc by 2</button>
           <button className="dec" onClick={()=> {
            let tem = val
            if(tem==0)
            {
                alert("enter inc")
                return
            }
            setval(tem-1)
        }}>Drc By 1</button>
        <br />

        <button>Timer start</button>
        </>
    )
}