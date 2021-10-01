import React from 'react';
import s from './ProfileInfo.module.css'
<<<<<<< HEAD


const ProfileInfo = () => {
    return (
        <div>
             <div  className={s.content}>
=======
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";


type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.content}>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <div className={s.discriptionBlock}>
<<<<<<< HEAD
=======
                <img src={props.profile.photos.large}/>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
                Ava+discription
            </div>
        </div>
    )
}
export default ProfileInfo;