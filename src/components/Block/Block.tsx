import React, {FC, useEffect, useState} from 'react';
import {IBlock} from "../../models/models";
import styles from "./Block.module.scss"
import { RxDragHandleDots2 } from "react-icons/rx";
import TextareaAutosize from 'react-textarea-autosize';
import {dataSlice} from "../../store/reducers/DataSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useParams} from "react-router-dom";

interface IBlockProps extends Omit<IBlock, "type"|"frontendId">{
    blockId: number;
    handleSaved: ()=>void;
}

const Block: FC<IBlockProps> = ({title, content, blockId}) => {
    const {
        data,
        currentWorkspaceId,
        currentPageId,
        currentBlockId
    } = useAppSelector(state => state.dataReducer)
    const [focused, setFocused] = useState<boolean>(false)
    const {updateCurrentBlockId, updateBlock} = dataSlice.actions;
    const {workspaceId, pageId} = useParams();
    const dispatch = useAppDispatch()

    function handleFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
        dispatch(updateCurrentBlockId(blockId))
        setFocused(true)
    }

    function handleBlur() {
        setFocused(false)
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateBlock({
            name:e.target.name,
            value:e.target.value,
            currentWorkspaceId: parseInt(workspaceId!),
            currentPageId:parseInt(pageId!),
            currentBlockId:blockId}
        ))
    }

    return (
        <div className={`${styles.layout} ${focused?styles.layoutFocused:""}`}>
            <TextareaAutosize
                name="title"
                onBlur={()=>handleBlur()}
                onFocus={(e)=>handleFocus(e)}
                onChange={(e)=>handleChange(e)}
                value={data[parseInt(workspaceId!)]?.pages[parseInt(pageId!)]?.pageBlocks[blockId]?.title}
                className={styles.title}
            ></TextareaAutosize>
            <TextareaAutosize
                name="content"
                onBlur={()=>handleBlur()}
                onFocus={(e)=>handleFocus(e)}
                maxRows={20}
                onChange={(e)=>handleChange(e)}
                value={data[parseInt(workspaceId!)]?.pages[parseInt(pageId!)]?.pageBlocks[blockId]?.content}
                className={styles.content}
            ></TextareaAutosize>
        </div>
    );
};

export default Block;
