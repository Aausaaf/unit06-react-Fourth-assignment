import "./grocery.css"
import React, { useState } from 'react';

const Grocerytodo = (props) => {

    const [itemname, setitemname] = useState("")
    const [itemquan, setitemquan] = useState("")
    //console.log(itemname)
    console.log(props.itemdetails)
    
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
                let tem = {
                    id: props.itemdetails.length,
                    name: itemname,
                    quantity:itemquan,
                }
                setitemname("")
                setitemquan("")
                
                props.changedetails(tem)
                }
        }} className="add">Add</button>
    </>);
}
 
export default Grocerytodo;