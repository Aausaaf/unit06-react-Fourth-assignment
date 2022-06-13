import React from 'react';
import { useState } from 'react';
import Formnavbar from './formnavbar';
import Formpage from './formpage';
import Employeedetails from './formdetails';
const Form = () => {
    const [chage, setchange] = useState(0)
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [address,setaddress] = useState("")
    const [department, setdepartment] = useState("")
    const [salary, setsalary] = useState("")
    const [marital, setmarital] = useState("")
    const [all, setall] = useState([])
    console.log(all)
    const namechange = (t) => {
        setname(t)
    }
        const agechange = (t) => {
        setage(t)
    }
        const addresschange = (t) => {
        setaddress(t)
    }
        const departmentchange = (t) => {
        setdepartment(t)
    }
        const salarychange = (t) => {
        setsalary(t)
    }
        const maritalchange = (t) => {
        setmarital(t)
    }
        const allchange = (t) => {
        setall([...all,t])
    }
    const chages = (t) => {
         setchange(t) 
    }
    console.log(chage)
    return (<>
        <Formnavbar changes={chages} ></Formnavbar>
        {
            (chage == 0) ? <Formpage
                name={name}
                setname={namechange}
                age={age}
                setage={agechange}
                address={address}
                setaddress={addresschange}
                department={department}
                setdepartment={departmentchange}
                salary={salary}
                setsalary={salarychange}
                marital={marital}
                setmarital={maritalchange}
                all={all}
                setall={allchange}

                ></Formpage> : <Employeedetails  all={all}></Employeedetails>
        }
        
    </>);
}
 
export default Form;