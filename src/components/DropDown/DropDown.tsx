import React, {useEffect, useState} from 'react';
import styles from "./DropDown.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getData, logout} from "../../store/reducers/ActionCreators";
import {useNavigate, useParams} from "react-router-dom";
import {IoIosAddCircleOutline, IoIosArrowDown} from "react-icons/io";
import {IPage, IWorkspace} from "../../models/models";
import {dataSlice} from "../../store/reducers/DataSlice";

const DropDown = () => {
    const {data, error} = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [workspaceExpanded, setWorkspaceExpanded] = useState<number[]>([]);
    const {updateCurrentWorkspaceId, updateCurrentPageId, updateCurrentBlockId} = dataSlice.actions;

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

    const mapPages = (page: IPage,pageId:number, workspace: IWorkspace,workspaceId:number) =>{
        if(workspaceExpanded.includes(workspace.workspaceId)){
            return (<div onClick={()=>navigateToPage(pageId, workspaceId)} className={styles.pageTitle}>
                        {page.title}
                    </div>)
        }else{
            return <></>
        }
    }

    function navigateToPage(pageId: number, workspaceId: number) {
        dispatch(updateCurrentWorkspaceId(workspaceId))
        dispatch(updateCurrentPageId(pageId))
        dispatch(updateCurrentBlockId(-1))
        navigate(`/workspace/${workspaceId}/${pageId}`)
    }

    return (
        <div className={styles.content}>
            <div className={styles.workspacesList}>
                {data.map((workspace,workspaceId)=>(
                        <div>
                            <div className={styles.titleGroup}>
                                <IoIosArrowDown onClick={()=>handleExpand(workspace.workspaceId)} style={workspaceExpanded.includes(workspace.workspaceId)?{rotate: "90deg"}:{}} className={styles.icon}></IoIosArrowDown>
                                <div onClick={()=>handleExpand(workspace.workspaceId)} className={styles.title} key={workspace.workspaceId}>{workspace.name}</div>
                                <IoIosAddCircleOutline className={styles.addPageIcon}/>
                            </div>
                            <div className={styles.dropdownContent}>
                                {workspace.pages?.map((page, key)=>mapPages(page, key,workspace,workspaceId))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DropDown;
