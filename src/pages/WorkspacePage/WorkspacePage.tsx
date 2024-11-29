import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getData, logout} from "../../store/reducers/ActionCreators";
import {useNavigate} from "react-router-dom";

const WorkspacePage = () => {
    const dispatch = useAppDispatch();
    const {data, error} = useAppSelector(state => state.dataReducer)
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
        <div>
            <h1>{error}</h1>
            {data?.map((el)=>(
                <div key={el.workspaceId}>{el.name}</div>
            ))}
        </div>
    );
};

export default WorkspacePage;
