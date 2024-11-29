import React, {useEffect, useState} from 'react';
import styles from "./DropDown.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getData, logout} from "../../store/reducers/ActionCreators";
import {useNavigate} from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = () => {
    const {data, error} = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [workspaceExpanded, setWorkspaceExpanded] = useState<number[]>([]);

    useEffect(()=>{
        dispatch(getData())
    },[])

    useEffect(()=>{
        if(error.length!==0){
            dispatch(logout()).then(()=>{
                navigate("/login")
            })
        }
    },[error])

    const handleExpand = (workspaceId: number) =>{
        let index = workspaceExpanded.indexOf(workspaceId)
        index==-1?setWorkspaceExpanded([...workspaceExpanded,workspaceId]):setWorkspaceExpanded(workspaceExpanded.toSpliced(index,1))
    }

    return (
        <div className={styles.content}>
            <div className={styles.workspacesList}>
                {data.map((workspace)=>(
                        <div>
                            <div onClick={()=>handleExpand(workspace.workspaceId)} className={styles.titleGroup}>
                                <IoIosArrowDown style={workspaceExpanded.includes(workspace.workspaceId)?{rotate: "90deg"}:{}} className={styles.icon}></IoIosArrowDown>
                                <div className={styles.title} key={workspace.workspaceId}>{workspace.name}</div>
                            </div>

                            <div className={styles.dropdownContent}>
                                {workspace.pages?.map((page)=>{
                                        if(workspaceExpanded.includes(workspace.workspaceId)){
                                            return <div>
                                                {page.title}
                                            </div>
                                        }else{
                                            return <p></p>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DropDown;
