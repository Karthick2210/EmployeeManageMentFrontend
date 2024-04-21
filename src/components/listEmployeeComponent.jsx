import React ,{useEffect, useState}from 'react'
import { listEmployees } from '../Services/EmployeeServie'


const ListOfEmployeeComponent = () => {

const [employee , setEmployees] = useState ([])

useEffect(()=>{
    
    listEmployees().then((response)=>{
        setEmployees(response.data)
    }).catch(error=>{
        console.error(error);
    })
},
[])
  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>EmployeeFirstName</th>
                    <th>EmployeelastName</th>
                    <th>EmployeeEmail Id</th>
                </tr>
            </thead>
            <tbody>
                {employee.map(employee=>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emial}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ListOfEmployeeComponent