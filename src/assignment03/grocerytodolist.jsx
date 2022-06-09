import "./grocery.css"
import React from 'react';

const GroceryTodolist = (props) => {

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
            }}>Delete</p>
        </div>
                        </>
                )
                    
            })
        }
    </>);
}
 
export default GroceryTodolist;