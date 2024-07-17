import './listEmployeeComponent.css'
import React,{useState,useEffect} from "react"
// import { listEmployees } from "./services/listEmployee";

function ListEmployeeComponent()
{
    const dummyData=[
        {
            "id":1,
            "firstname":"Anushka",
            "lastname":"Shirode",
            "email":"anushkashirode@gmail.com"
        },
        {
            "id":2,
            "firstname":"Anu",
            "lastname":"Shi",
            "email":"anushi@gmail.com"
        },
        {
            "id":3,
            "firstname":"Abc",
            "lastname":"Xyz",
            "email":"abcxyz@gmail.com"
        }
    ]

    const [employee,setEmployee]=useState([]);

    useEffect(()=>{listEmployees.then((response) => {setEmployee(response.data);}).catch(error => console.error(error));},[])
    return(<div>
        <h1>EmployeeListComponent</h1>
        <ol>
            {dummyData.map(dummy => (<ul key={dummy.id}><li >{dummy.firstname}</li>
                                      <li>{dummy.lastname}</li>
                                      <li>{dummy.email}</li>
                                      </ul> 
                                       ))}
        </ol>
        <div className='container'>
        <h2 className="text-center">List Employee</h2>
        <table className='table table-striped table-bordered'>
            <thead>
            <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {dummyData.map(dummy => (<tr key={dummy.id}><td>{dummy.firstname}</td><td>{dummy.lastname}</td><td>{dummy.email}</td></tr>
                    
                                       ))}
           
           </tbody>
        </table>
        </div>
    </div>)
}

export default ListEmployeeComponent;