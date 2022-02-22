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
                console.log(items);
                setItems(items);
            } catch (e) {
                console.log(e);
            }
        }
        getItems();
    }, []);


    return (
        <div>
            <h1 className="title-overview"> Produits </h1>
            <div className="overview-items">

                {items ? items.map((items, index) => {
                    return (
                        <li key={index} className="overview">
                            <img src={items.imageUrl} alt="" />
                            <div className="text-overview">
                                {items.name}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default Items;