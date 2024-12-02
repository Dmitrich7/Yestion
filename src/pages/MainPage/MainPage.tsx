import React from 'react';
import styles from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>К чёрту санкции</h1>
                <p className={styles.subTitle}>Пишите. Или не пишите. Нам всё равно.</p>
                <div className={styles.contentButtonGroup}>
                    <button className={styles.wonderful}>Замечательно</button>
                    <button className={styles.thanks}>Спасибо</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

