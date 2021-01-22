import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__footage">{location.footage}</div>
        <div className="location__accessible">{location.accessible}</div>
    </section>
)