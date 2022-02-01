import React, { useState, useEffect, useRef } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// import renderNotification from "../../../utils/notification";

// import api from "../../../utils/api";

import "./_login.scss";

const Login = () => {
    //   const appState = useSelector((state) => state.auth);
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const inputEmail = useRef(null);
    //   const inputPassword = useRef(null);
    //   const dispatch = useDispatch();
    //   const history = useHistory();
    //   const [open, setOpen] = useState(false);

    //   useEffect(() => {
    //     dispatch({ type: "USER_RESET" });
    //   }, [dispatch]);

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       dispatch({ type: "USER_FETCH" });
    //       let result = await api.post("/login", {
    //         email: email,
    //         password: password,
    //       });
    //       dispatch({ type: "USER_FETCH_SUCCESS" });
    //       setOpen(true);
    //       dispatch({ type: "USER_SET", payload: result.data.data });
    //       history.push("/");
    //     } catch (err) {
    //       dispatch({
    //         type: "USER_FETCH_WRONG",
    //         payload: err,
    //       });
    //       setOpen(true);
    //     }
    //   };

    //   const handleClose = () => {
    //     setOpen(false);
    //   };

    //   const goToResetPassword = () => {
    //     history.push("/forget/password");
    //   };

    //   const handleSetEmail = () => {
    //     setEmail(inputEmail.current.value);
    //   };

    //   const handleSetPassword = () => {
    //     setPassword(inputPassword.current.value);
    //   };

    return (
        <div className="container_login">
            <div className="box_form">
                <form autoComplete="off">
                    <h1 className="sub_title">
                        Connectez-vous à votre compte client !
                    </h1>
                    <Input
                        // reference={inputEmail}
                        customClass={"input"}
                        height={"40px"}
                        width={"90%"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Email"}
                    // onChangeMethod={handleSetEmail}
                    />
                    <Input
                        // reference={inputPassword}
                        customClass={"input mb-2"}
                        height={"40px"}
                        width={"90%"}
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        placeholder={"Mot de passe"}
                    //   onChangeMethod={handleSetPassword}
                    />
                    {/* <span className="reset_password" onClick={goToResetPassword}> */}
                    Mot de passe oublié ? Cliquez ici
                    {/* </span> */}
                    <Button
                        label={"ME CONNECTER"}
                        height={"50px"}
                        width={"90%"}
                        type={"submit"}
                        customClass={"btn basic-dark-color basic-light-background"}
                    //   onClickMethod={handleSubmit}
                    />
                </form>
            </div>
        </div>

    );
};

export default Login;