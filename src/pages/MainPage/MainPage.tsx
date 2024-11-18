import React from 'react';
import classes from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <>
            <div className={classes.content}>
                <h1 className={classes.mainTitle}>К чёрту санкции</h1>
                <p className={classes.subTitle}>Пишите. Или не пишите. Нам всё равно.</p>
                <div className={classes.contentButtonGroup}>
                    <button className={classes.wonderful}>Замечательно</button>
                    <button className={classes.thanks}>Спасибо</button>
                </div>
            </div>
        </>
    );
};

export default MainPage;
