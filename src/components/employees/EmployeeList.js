import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {LocationContext} from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getEmployees)
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Current Employees</h2>
        <button onClick={() => {history.push("/employees/create")}}>
            Add New Employee
        </button>
        <div className="employees">
        {
         employees.map(employee => {
            const clinic = locations.find(l => l.id === employee.locationId)
          //creating a new object with React by adding new properties to employeeCard
            return <EmployeeCard key={employee.id}
                        employee = {employee}
                        location={clinic}
                         />
          })
      }
        </div>
        </>
    )
}