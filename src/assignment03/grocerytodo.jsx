import "./grocery.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Grocerytodo = (props) => {

    const [itemname, setitemname] = useState("")
    const [itemquan, setitemquan] = useState("")
    
    //console.log(itemname)
    console.log(props.itemdetails)
    useEffect(()=>{
        axios.get(`http://localhost:3000/array?_page=${props.page}&_limit=3`).then((res => {
            console.log(res.data)
            props.changedetails(res.data)
        })).catch((err => {
            console.log(err)
        }))

        const update = () => {
         console.log("slrg")
     }
    }, )
    
    const update =  () => {
        axios.post('http://localhost:3000/array', {
            
                    //id: props.itemdetails.length,
                    name: itemname,
                    quantity:itemquan,
                
        }).then((res => {
          console.log(res)
        })).catch((err => {
          console.log(err)
      }))
            
        }
          
      
    useEffect(() => {
        
    },[props.itemdetails])
    return (<>
        <div className="title">
            <h3>Add Your Item here</h3>
        </div>
        <input value={itemname}  type="text" className="additem" placeholder="Add Item.. "  onChange={(e)=>  setitemname(e.target.value)}/>
        <br />
        <input value={itemquan} type="text" className="addquantity" placeholder="Add Quant.. " onChange={(e)=>{setitemquan(e.target.value)}}/>
        <br />
        <button onClick={() => {
            if (itemname == "" || itemquan=="")
            {
                alert(`Please fill Required Details`)
                return
            }
            else
            {
               update()
                setitemname("")
                setitemquan("")
                
               
                }
        }} className="add">Add</button>
        
    </>);
}
 
export default Grocerytodo;