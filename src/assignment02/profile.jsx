import React, { useState } from 'react';
import "./todo.css"
const Profile = () => {
    const [age, setage] = useState(18)
    const[show,chageshow] = useState("show More Details")
    return (<>
        <div className="profile_container">
            <div className="imgbox">
                <img className='img' src="https://avatars.githubusercontent.com/u/54926454?v=4" alt="" />
            </div>
            <p className="name">Name : Abdual Jabbar Peer</p>
            <p className="age">Age : {age}</p>
            <button className="increaseage" onClick={() => {
                setage(pre=> pre+1)
            }}>Increase Age </button>
            <button className='decreaseage' onClick={() => {
                setage(pre=>pre-1)
            }}>Decrease Age</button>
            <br />
            <button className="showmore"
                onClick={() => {
                    (show=="show More Details")?chageshow("Hide Details")  : chageshow("show More Details")
                }}
                
            >{show}</button>
            {
                (show == "Hide Details") ? <div><p className='location'>Location : Bengaluru</p> <p className='organization'>Organization : Masai School</p></div> : <p> </p>
            }
    </div>
    </>);
}
 
export default Profile;