import React from 'react';
import classes from "./Navbar.module.scss";
import {ReactComponent as Logo} from "../../assets/Yestion-logo.svg"
import { useNavigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {logout} from "../../store/reducers/ActionCreators";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const navigate = useNavigate();
    const {isLoggedIn} = useAppSelector(state => state.persistedLoginReducer);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Logo className={classes.logoSvg}></Logo>
                <h2 onClick={()=>navigate("/")} className={classes.logoText}>Yestion</h2>
            </div>

            <div className={classes.authGroup}>
                {!isLoggedIn?
                    <>
                        <button onClick={()=>navigate("/login")} className={classes.login}>Войти</button>
                        <button onClick={()=>navigate("/register")} className={classes.register}>Зарегистрироваться</button>
                    </>
                    :
                    <>
                        <button onClick={()=>dispatch(logout())} className={classes.logoff}>Выйти</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;
