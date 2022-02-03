import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getProduct } from "./../../../utils/apiService"


import "./_item.scss";


function Item() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            try {
                let item = await getProduct();
                setItem(item);
            } catch (e) {
                console.log(e);
            }
        }
        getItem();
    }, []);
    return (
        <div>
            <div className="overview-item">
                {item ? item.map((item) => {
                    return (
                        <li className="overview">
                            <h1 className="title-overview"> Produit </h1>
                            <div className="text-overview">
                                {item}
                            </div>

                        </li>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default Item;