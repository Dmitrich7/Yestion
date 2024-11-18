import React, {useState} from 'react';
import styles from "./RegisterPage.module.scss"
import {ICredentials} from "../../models/models";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {register} from "../../store/reducers/AuthHandling/ActionCreators";

const LoginPage = () => {
    const [formData, setFormData] = useState<ICredentials>({username:"",password:""})
    const dispatch = useAppDispatch();
    const {error,isLoading} = useAppSelector(state => state.loginReducer)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(register(formData)).then(()=>{console.log("ball" + error)});
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <span className={styles.span}>Зарегистрироваться</span>
                <input
                    name='username'
                    placeholder="Имя пользователя"
                    className={styles.input}
                />
                <input
                    name='password'
                    type="password"
                    placeholder="Пароль"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );
};

export default LoginPage;
