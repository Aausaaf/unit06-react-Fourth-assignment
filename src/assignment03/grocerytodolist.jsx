import "./grocery.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";

const GroceryTodolist = (props) => {
    const [ids,setid] = useState()

    //De
       useEffect(() => {
          
             
               axios.delete(`http://localhost:3000/array/${ids}`)
                   .then(res => {
                       console.log(res.data)
                     
                   }).catch(err => {
                       console.log(err)
                   })
          
           
             },[ids])
   
    return (<>
        {
            (props.itemdetails.length > 0)?  <div className="header2">
            <p style={{marginLeft:"3vw"}}>Items</p>
            <p>Quantity</p>
            <p>Act</p>
        </div> : " "
       }
        {
            props.itemdetails.map((ele) => {
                return (
                    <>
                         <div className="list">
                            <p style={{ marginLeft: "3vw" }}>{ele.name}</p>
                            <p>{ ele.quantity}</p>
                            <p onClick={() => {
                              let a =  props.itemdetails.filter((eles) => {
                                    return ele.id != eles.id
                              })
                                props.changedetails(a)
                                setid(ele.id)
            }}>Delete</p>
        </div>
                        </>
                )
                    
            })
        }
    </>);
}
 
export default GroceryTodolist;