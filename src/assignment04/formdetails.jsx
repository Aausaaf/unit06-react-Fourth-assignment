import React from 'react';
import "./form.css"
const Employeedetails = (props) => {
    return (<>
        <div className="formdetails">
            <div className="headerEmploy">
                <p style={{marginLeft:"3vh"}}>S No.</p>
                <p>Name</p>
                <p>Age</p>
                <p style={{marginLeft:"15vh"}}>Address</p>
                <p  style={{marginLeft:"15vh"}} >Department</p>
              
                <p style={{marginLeft:"10vh"}}>Salary</p>
                <p style={{marginLeft:"5vh"}}>Marital status</p>
            </div>
            {
                props.all.map((el) => {
                    return (<>
                        <div className="Employ">
                            <p style={{marginLeft:"3vh"}}>{el.id + 1}</p>
                            <p >{el.name}</p>
                            <p>{el.age}</p>
                            <p style={{marginLeft:"15vh"}}>{el.address}</p>
                            <p style={{marginLeft:"15vh"}}>{el.department}</p>
                            <p style={{marginLeft:"10vh"}}>{el.salary}</p>
                            <p style={{marginLeft:"5vh"}}>{el.marital}</p>
                        </div>
                    </>)
               })
            }
        </div>
    </>);
}
 
export default Employeedetails;