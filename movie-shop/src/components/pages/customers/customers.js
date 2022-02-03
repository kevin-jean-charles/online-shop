import React, { useState, useEffect } from "react";
import { getUsers, getUser } from "./../../../utils/apiService";

function Customers() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const getCustomers = async () => {
            try {
                let customers = await getUsers();
                setCustomers(customers);
            } catch (e) {
                console.log(e);
            }
        }
        getCustomers();
    }, []);

    useEffect(() => {
        const getCustomer = async () => {
            try {
                let customer = await getUser();
                setCustomer(customer);
            } catch (e) {
                console.log(e);
            }
        }
        getCustomer();
    }, []);

    return (
        <div>
            <div className="overview-customers">
                {customers ? customers.map((customers) => {
                    return (
                        <li className="overview">
                            <h1 className="title-overview"> Clients </h1>
                            <div className="text-overview">
                                {customers}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
            <div className="overview-customer">
                {customer ? customer.map((customer) => {
                    return (
                        <li className="overview">
                            <h1 className="title-overview"> Clients </h1>
                            <div className="text-overview">
                                {customer}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default Customers;