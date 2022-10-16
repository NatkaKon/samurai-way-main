import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg'} alt={'photo'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}