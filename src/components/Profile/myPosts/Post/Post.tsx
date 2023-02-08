import React from "react";
import s from './Post.module.css'
import {PostType} from '../../../../redux/store';

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src={'https://static-cse.canva.com/blob/742068/1600w--JuHp_Tx_2w.jpg'} alt={'avatar'}/>
            {props.message}
            <div>
                <span>like</span>  {props.likesCount}
            </div>
        </div>
    )
}

