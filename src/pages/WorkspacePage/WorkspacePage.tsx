import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getData} from "../../store/reducers/AuthHandling/ActionCreators";

const WorkspacePage = () => {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector(state => state.dataReducer)

    useEffect(()=>{
        dispatch(getData()).then(()=>{
          console.log( data)
        })
    },[])

    return (
        <div>
            {data.map((el)=>(
                <div>{el.name}</div>
            ))}
        </div>
    );
};

export default WorkspacePage;
