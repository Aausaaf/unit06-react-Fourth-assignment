import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import {Usecontex}  from "./App"
const Fetch = () => {
    const [data, setdata] = useState([])
    const [ids, setids] = useState(1)
    const user = useContext(Usecontex)
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then( res  =>
            {
                console.log(res.data)
                setdata(res.data)
            }).catch( err => {
                console.log(err)
            })
    },[])
    return (<>
        <h1>{ user}</h1>
        <input value={ids} type="text" onChange={(e) => {
            setids(e.target.value)
        }} />
        <div className="container">
            {
                data.map((ar) => {
                    return <><div className="cart">
                        <div className="imgbox">
                            <img src={ar.image} alt="" />
                        </div>
                        <p>{ar.title}</p>
                        <p>{ar.price}</p>
                    </div>
                    </>
                })
            }
            <p>{user }</p>
        </div>
    </>);
}
 
export default Fetch;

