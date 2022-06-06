import React,{Component, useState } from "react";
import List from "./todolist.js";
import "./todo.css"
import Profile from "./profile.jsx";



const Todo = () => {
    const [updatetext,Updatetext] = useState()
    const [data, Data] = useState([
       "Wake Up","Drink Tea" ,"Eat Maggi","Sleep"
   ])
   const change = (event) => {
       console.log(event.target.value)
       Updatetext(event.target.value)
   }

   const dat = () => {
       Data((oldData) => {
           return [...oldData,updatetext]
       })
       Updatetext("")
   }

    
 const deteledata = (id) => {
     Data((oldData) => {
         return oldData.filter((arr,index)=> {
             return arr[index] !== arr[id]
         })
     })
 }
    return(
        <>
            <div className="main_div">
                <div className="profile">
                    <Profile></Profile>
                </div>
            <div className="center_div">
                <br/>
                <h1>
                    ToDo List
                </h1>
                <br/>
                <input type="text" placeholder="Add a Item" onChange={change} value = {updatetext} />
                <button className="inputbuttom" onClick={dat}>+</button>
                <ol>
                    {/* <li>
                        {date}
                    </li> */}
                    {
                        data.map( (dateval,index) => {
                         return  <List
                          text={dateval}
                          key ={index}
                          id={index}
                          onSelect={deteledata}
                         ></List>
                        })
                    }
                </ol>
            </div>
        </div>
        </>
    )
}
export default Todo;
