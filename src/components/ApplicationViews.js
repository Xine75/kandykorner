import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the product list when http://localhost:3000/products */}
            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>


            {/* Render the animal list when http://localhost:3000/animals */ }
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

    {/* Render the animal list when http://localhost:3000/animals */ }
    {/* <CustomerProvider>
        <Route exact path="/customers">
            <CustomerList />
        </Route>
    </CustomerProvider> */}

    {/* Render the animal list when http://localhost:3000/animals */ }
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

        </>
    )
}