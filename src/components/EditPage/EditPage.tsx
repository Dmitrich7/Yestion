import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import styles from "./EditPage.module.scss"
import {IoIosAddCircleOutline} from "react-icons/io";
import Block from "../Block/Block";
import {dataSlice} from "../../store/reducers/DataSlice";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import {getData, logout} from "../../store/reducers/ActionCreators";

const EditPage = () => {
    const {workspaceId, pageId} = useParams();
    const {data, error} = useAppSelector(state => state.dataReducer)
    const {setCurrentBlockId} = dataSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(true)



    useEffect(()=>{
        setCurrentBlockId(-1)
    })

    return (
        <div className={styles.page}>
            <h1 className={styles.workspaceTitle}>{data[parseInt(workspaceId!)]?.name}</h1>
            <h2 className={styles.pageTitle}>{data[parseInt(workspaceId!)]?.pages[parseInt(pageId!)]?.title}</h2>
            <div className={styles.addBlock}>
                <IoIosAddCircleOutline className={styles.addBlockIcon}/>
                <FaRegSave className={`${styles.saveIcon}`}></FaRegSave>
                <MdDeleteOutline className={styles.deleteBlockIcon}></MdDeleteOutline>
            </div>
            {data[parseInt(workspaceId!)]?.pages[parseInt(pageId!)]?.pageBlocks.map((block,key)=> {
                return (
                        <Block
                            key={data[parseInt(workspaceId!)].workspaceId.toString()+pageId!+key.toString()}
                            blockId={key}
                            title={block.title}
                            content={block.content}
                        ></Block>
                    )
                })
            }
        </div>
    );
};

export default EditPage;
