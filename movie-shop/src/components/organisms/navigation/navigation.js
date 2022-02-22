import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../../utils/apiService";
// import { useSelector } from "react-redux";

import cart from "./../../../assets/icons/shopping-cart-solid.svg";
import icon from "./../../../assets/icons/tv.png";
import "./_navigation.scss";

// import Button from "../../atoms/Button/button";

const Nav = () => {
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const getCat = async () => {
            try {
                let categories = await getCategories();
                console.log(categories);
                setCategories(categories);
            } catch (e) {
                console.log(e);
            }
        }
        getCat();
    }, []);

    const goToCategoryPage = (link) => {
        return navigate(`/items/category/${link}`)
    };

    return (
        <div className="container_global_responsive_nav">

            <nav className="shadow">
                <Link to="/">
                    <div className="box_logo">
                        <img src={icon} alt="logo" />
                    </div>
                </Link>
                <form>
                    <select onChange={(e) => goToCategoryPage(e.target.value)}>
                        <option value="Produits">Produits</option>
                        {categories ? categories.map((categorie, index) => {
                            console.log(categorie.categoryName);
                            return (
                                <option key={index} values={categorie.categoryName}>
                                    {categorie.categoryName}
                                </option>
                            );
                        }) : null}
                    </select>
                </form >
                <Link to="/login">
                    <h2>CONNEXION</h2>
                </Link>
                <Link to="/cart">
                    <h2 className="cart">PANIER
                        <img src={cart} alt="icon-cart" /></h2>
                </Link>
            </nav >
        </div >
    );
};

export default Nav;