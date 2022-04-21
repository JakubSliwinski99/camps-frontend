import { useEffect, useState } from "react"
import { getAllEmployees } from "../services/camps-api"

export const EmployeesContainer = () => {

    const [employees, setEmployees] = useState([])
  
    useEffect(() => {
      getAllEmployees().then(employees => setEmployees(employees))
      console.log('setEmployyes')
    }, [])
  
    return <div>{JSON.stringify(employees)}</div>
  }