import React, {useEffect, useState} from 'react';
import styles from "./LoginPage.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login} from "../../store/reducers/AuthHandling/ActionCreators";
import {ICredentials} from "../../models/models";


const LoginPage = () => {
    const [formData, setFormData] = useState<ICredentials>({username:"",password:""})
    const dispatch = useAppDispatch();
    const {error,isLoading} = useAppSelector(state => state.loginReducer)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(login(formData));
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <div className={styles.container}>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
                <span className={styles.span}>Войти</span>
                <input
                    name='username'
                    placeholder="Имя пользователя"
                    className={styles.input}
                    onChange={(e)=>handleChange(e)}
                />
                <input
                    name='password'
                    type="password"
                    placeholder="Пароль"
                    onChange={(e)=>handleChange(e)}
                    className={styles.input}
                />
                <button disabled={isLoading} type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
