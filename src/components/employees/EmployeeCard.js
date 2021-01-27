import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
    <h3 className="employee__name">Name: {employee.name}</h3>
    <div className="employee__address">Location: {employee.location.address}</div>
    <div className="employee__position">Manager? {employee.manager ? "Yes" : "No"}</div>
    <div className="employee__hours">Full Time? {employee.fullTime ? "Yes" : "No"}</div>
    <div className="employee__rate">Wage: ${employee.hourlyRate}/hr</div>
</section>
)


