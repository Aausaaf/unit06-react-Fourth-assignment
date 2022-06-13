import React, { useEffect, useState } from 'react';
import "./grocery.css"
import Grocerytodo from './grocerytodo';
import GroceryTodolist from './grocerytodolist';
const Grocery = () => {
    const [count, setcount] = useState(0)
      const [page,setpage]  =useState(1)
        const [itemdetails, setitemdetails] = useState([])
    const arr = ["https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/newsletterbg.png.webp", "https://www.everestfoods.com/wp-content/uploads/2022/03/Everest-1.png", "https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/4.jpg.webp", "https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/4.jpg.webp", "https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/2.jpg.webp"]
    const changedetails = (tem) => {
        setitemdetails(tem)
    }
       const changedetailes = (tem) => {
        setitemdetails(tem)
    }
  
    useEffect(() => {
        let rotate = setInterval(() => {
                if (count == 4)
            {
                setcount(0)
                }
            setcount(pre => pre + 1)
        
        }, 3000)

      


        return () => {
            clearInterval(rotate)
        }
    })
    return (<>
        <div className="header"><h2>Your Grocery Store</h2></div>
        <div className="slider">
            <img src={arr[count]} alt="" />
        </div>
        <div className="flex1">
            <div className="todoinput">
           <Grocerytodo page={page}  itemdetails={itemdetails} changedetails={changedetails}></Grocerytodo>
            </div>
            <div className="todoList">
             <GroceryTodolist itemdetails={itemdetails}  changedetails={changedetailes} ></GroceryTodolist>
            </div>
            
        </div>
        {(itemdetails.length>0)?<div style={{marginLeft:"35vw",marginTop:"-8vh"}} className="block">
            <button onClick={() => {
                setpage(page=>page-1)
                  }} disabled={page==1}>Preve</button>
        <button style={{marginLeft:"36vw"}}  onClick={() => {
                setpage(page=>page+1)
                  }}>Next</button>
            </div>: " "
            
        }
    </>);
}
 
export default Grocery;