import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../utils/apiService";
// import { useSelector } from "react-redux";

import cart from "./../../../assets/icons/shopping-cart-solid.svg";
import icon from "./../../../assets/icons/tv.png";
import "./_navigation.scss";

// import Button from "../../atoms/Button/button";

const Nav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            try {
                let categories = await getCategories();
                setCategories(categories);
            } catch (e) {
                console.log(e);
            }
        }
        getCat();
    }, []);
    // const appState = useSelector((state) => state);
    // const items = appState.items.items.values;
    // const [open, setOpen] = useState(true);
    // const [heightNav, setHeightNav] = useState("0%");

    // const toggleNav = () => {
    //     setOpen(!open);
    //     if (open === true) {
    //         setHeightNav("100%");
    //     } else {
    //         setHeightNav("0%");
    //     }
    // };

    // const setOpenNav = () => {
    //     setOpen(true);
    //     toggleNav();
    // };

    // const handleLogout = async () => {
    //     await api.post("/logout");
    //     window.location.reload();
    // };

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <div className="container_global_responsive_nav">

            <nav className="shadow">
                <Link to="/">
                    <div className="box_logo">
                        <img src={icon} alt="logo" />
                    </div>
                </Link>
                <form>
                    <label>PRODUITS</label>
                    <select>
                        {categories ? categories.map((categories) => {
                            return (
                                <option value="">
                                    <Link to="/items/:cat">
                                        <h2>{categories}</h2>
                                    </Link>
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