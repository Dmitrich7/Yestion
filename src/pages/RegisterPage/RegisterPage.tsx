import React, {useState} from 'react';
import styles from "./RegisterPage.module.scss"
import {ICredentials} from "../../models/models";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login, register} from "../../store/reducers/AuthHandling/ActionCreators";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState<ICredentials&{confirmPassword: string}>({username:"",password:"",confirmPassword:""})
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading,error} = useAppSelector(state => state.persistedLoginReducer)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(formData.confirmPassword==formData.password){
            dispatch(register(formData as ICredentials)).then((res)=>{
                if(res.payload!=""){
                    navigate("/login")
                }
            });
        }
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return (
        <div className={styles.container}>
            <form onSubmit={e=>handleSubmit(e)} className={styles.form}>
                <span className={styles.span}>Зарегистрироваться</span>
                <input
                    name='username'
                    placeholder="Имя пользователя"
                    className={styles.input}
                />
                <input
                    name='password'
                    type="password"
                    onChange={(e)=>handleChange(e)}
                    placeholder="Пароль"
                    className={styles.input}
                />
                <input
                    name='confirm password'
                    type="password"
                    onChange={(e)=>handleChange(e)}
                    placeholder="Подтвердите пароль"
                    className={styles.input}
                />
                <button disabled={isLoading} type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );
};

export default LoginPage;
