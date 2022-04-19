import { useEffect, useState } from "react";
import Axios from 'axios'

export function TitlePage(): JSX.Element {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees();
    }, [])

    const fetchEmployees = async() => {
        const response=await Axios('http://localhost:8000/api/employee/');
        setEmployees(response.data.results)    
    }

    console.log(employees)

    return(
        <div className="App">
            {
                employees && employees.map(employee=>{
                    return(
                    <div key={employee.id} style={{alignItems:'center',margin:'20px 60px'}}>
                        <h4>{employee.name}</h4>
                        <p>{employee.surname}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
