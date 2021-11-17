import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoType) => {
    if (!profile) {
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
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;