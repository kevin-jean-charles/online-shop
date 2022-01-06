import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import "./_navigation.scss";

// import Button from "../../atoms/Button/button";

const Nav = () => {
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
                <a href="/item">1</a>
            </nav>
        </div>
    );
};

export default Nav;