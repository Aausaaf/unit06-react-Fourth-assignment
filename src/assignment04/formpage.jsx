import React from 'react';
import "./form.css"
const Formpage = (props) => {
    const tem = {
        id: props.all.length,
        name: props.name,
        age: props.age,
        address: props.address,
        department: props.department,
        salary: props.salary,
        marital:props.marital
    }
    return (<>
        <div className="formdiv">
            <h1>Fill Detalis</h1>
            <input style={{marginTop:"7vh"}} placeholder="Fill Your Name" type="text" name="" id="name" value={props.name} onChange={(e) => {
                props.setname(e.target.value) 
            }} />
            <input type="text" placeholder="Fill Your age" name="" id="age" value={props.age} onChange={(e) => {
                props.setage(e.target.value)
            }} />
            <textarea type="text" placeholder="Fill Your Address" name="" id="address" value={props.address} onChange={(e) => {
                props.setaddress(e.target.value)
            }} />
                      <input type="text" placeholder="Fill Your Department" name="" id="department" value={props.department} onChange={(e) => {
                props.setdepartment(e.target.value)
            }} />
                      <input type="text" placeholder="Fill Your Salary" name="" id="salary" value={props.salary} onChange={(e) => {
                props.setsalary(e.target.value)
            }} />
                      <input type="text" placeholder="Fill Your Marital Status" name="" id="name" value={props.marital} onChange={(e) => {
                props.setmarital(e.target.value)
            }} />
            <button className='buttom' onClick={() => {
                props.setall(tem)
                props.setname("")
                props.setage("")
                props.setaddress("")
                props.setdepartment("")
                props.setsalary("")
                props.setmarital("")

            }}>Submit</button>
        </div>
    </>);
}
 
export default Formpage;