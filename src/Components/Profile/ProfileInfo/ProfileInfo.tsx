import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import ProfileStatus from "./ProfileStatus";



type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.content}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>*/}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status = "Hello my friends"/>
            </div>
        </div>
    )
}
export default ProfileInfo;