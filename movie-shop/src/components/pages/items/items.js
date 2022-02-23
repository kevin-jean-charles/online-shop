import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "./../../../utils/apiService";

// import { Link } from "react-router-dom";

// import BreadCrumb from "../../atoms/Breadcrumb/breadCrumb";
// import FormWizard from "../../molecules/formWizard/formWizard";

import "./_items.scss";


function Items() {
    const [items, setItems] = useState([]);
    let navigate = useNavigate();

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

    const goItemPage = (link) => {
        return navigate(`/item/${link}`)
    };


    return (
        <div className="global-container">
            <h1 className="title-overview"> Produits </h1>
            <div className="overview-items">

                {items ? items.map((items, index) => {
                    return (
                        <li onChange={(e) => goItemPage(e.target.value)} key={index} className="overview">
                            <img src={items.imageUrl} alt="" />
                            <div className="text-overview">
                                {items.name}
                            </div>
                            <div className="price-overview">
                                {items.unitPrice} €
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default Items;