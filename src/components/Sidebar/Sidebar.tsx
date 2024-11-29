import React, {FC, useState} from 'react';
import styles from "./Sidebar.module.scss"
import { FiAlignJustify } from "react-icons/fi";
import DropDown from "../DropDown/DropDown";
import {useAppSelector} from "../../hooks/redux";
import {IoIosAddCircleOutline} from "react-icons/io";

interface IModalProps{
}

const Modal: FC<IModalProps> = (props) => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <div className={`${styles.modalContent} ${sidebarActive?styles.sidebarContentExpanded:styles.sidebarContentCollapsed}`}>
                <div className={styles.buttonGroup}>
                    <div className={styles.titleGroup}>
                        <IoIosAddCircleOutline className={styles.icon}/>
                        <div className={styles.title}>Ваши рабочие пространства</div>
                    </div>
                    <FiAlignJustify onClick={()=>setSidebarActive(prevState => !prevState)} height={"100px"} width={"100px"} className={styles.collapse}/>
                </div>
                <div className={`${styles.sidebarContent}`}>
                    <DropDown/>
                </div>
            </div>
        </>
    );
};

export default Modal;
