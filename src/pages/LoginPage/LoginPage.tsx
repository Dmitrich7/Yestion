import React, {useEffect, useState} from 'react';
import styles from "./LoginPage.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login} from "../../store/reducers/ActionCreators";
import {ICredentials} from "../../models/models";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState<ICredentials>({username:"",password:""})
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading} = useAppSelector(state => state.persistedLoginReducer)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(login(formData)).then((res)=>{
            if(res.payload!=""&&res.payload!="Failed to fetch"){
                navigate("/")
            }
        });
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return (
        <div className={styles.container}>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
                <span className={styles.span}>Войти</span>
                <input
                    name='username'
                    placeholder="Имя пользователя"
                    className={styles.input}
                    onChange={(e)=>handleChange(e)}
                    disabled={isLoading}
                />
                <input
                    name='password'
                    type="password"
                    placeholder="Пароль"
                    onChange={(e)=>handleChange(e)}
                    className={styles.input}
                    disabled={isLoading}
                />
                <button disabled={isLoading} type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
