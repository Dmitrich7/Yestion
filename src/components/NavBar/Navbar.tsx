import React from 'react';
import classes from "./Navbar.module.scss";
import {ReactComponent as Logo} from "../../assets/Yestion-logo.svg"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Logo className={classes.logoSvg}></Logo>
                <h2 onClick={()=>navigate("/")} className={classes.logoText}>Yestion</h2>
            </div>
            <div className={classes.navButtonGroup}>

            </div>
            <div className={classes.authGroup}>
                <button onClick={()=>navigate("/login")} className={classes.login}>Войти</button>
                <button onClick={()=>navigate("/register")} className={classes.register}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Navbar;
