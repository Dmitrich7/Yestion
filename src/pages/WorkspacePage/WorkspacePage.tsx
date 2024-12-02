import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getData, logout} from "../../store/reducers/ActionCreators";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./WorkspacePage.module.scss"
import EditPage from "../../components/EditPage/EditPage";

const WorkspacePage = () => {
    const dispatch = useAppDispatch();
    const {data, error} = useAppSelector(state => state.dataReducer)
    const {workspaceId, pageId} = useParams();
    const navigate = useNavigate();

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

    return (
        <div className={styles.layout}>
            <EditPage></EditPage>
        </div>
    );
};

export default WorkspacePage;
