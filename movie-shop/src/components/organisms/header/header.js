import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import BoxNotification from "../../atoms/boxNotification/boxNotification";
// import Button from "../../atoms/Button/button"

import "./_header.scss";

const Header = () => {
    // const appState = useSelector((state) => state);
    // const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     appState.auth.user.isLogged ? setOpen(true) : setOpen(false);
    // }, [appState]);

    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div className="container_global_responsive mt-5">

            <header>
                <div className="heading_left">
                    <h4 className="subtitle_heading basic-color">
                        MOVIE SHOP
                    </h4>
                    <h1 className="title-heading basic-color">
                        BUY STUFF
                    </h1>
                    <h4 className="subtitle_heading basic-color">
                        THIS IS A TEST
                    </h4>
                    <p className="subtext_heading basic-color">
                        lorem ipsum dolor sit amet, consect et nesciunt et justo consequ
                    </p>
                    <div className="box_call_to_actions">
                        <HashLink
                            to="/items"
                            smooth={true}
                        >
                            {/* <Button
                                label={"Parcourir"}
                                height={"50px"}
                                width={"250px"}
                                customClass={
                                    "btn btn--rounded primary-color basic-light-background"
                                }
                            /> */}
                        </HashLink>
                        <Link
                            to="/item/:id"
                        >
                            {/* <Button
                                label={"Acheter"}
                                height={"50px"}
                                width={"250px"}
                                customClass={
                                    "btn btn--rounded basic-light-color primary-background"
                                }
                            /> */}
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;