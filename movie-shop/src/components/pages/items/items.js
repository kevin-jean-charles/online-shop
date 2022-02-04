import React, { useState, useEffect } from "react";
import { getProducts } from "./../../../utils/apiService";

// import { Link } from "react-router-dom";

// import BreadCrumb from "../../atoms/Breadcrumb/breadCrumb";
// import FormWizard from "../../molecules/formWizard/formWizard";

import "./_items.scss";


function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                let items = await getProducts();
                setItems(items);
            } catch (e) {
                console.log(e);
            }
        }
        getItems();
    }, []);


    return (
        <div>
            <div className="overview-items">
                {items ? items.map((items) => {
                    return (
                        <li className="overview">
                            <h1 className="title-overview"> Produits </h1>
                            <div className="text-overview">
                                {items}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default Items;