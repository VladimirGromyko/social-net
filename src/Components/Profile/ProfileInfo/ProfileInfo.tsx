import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ChangeEvent} from 'react';
import ProfileDataForm from './ProfileDataForm';


export type ProfileInfoType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profileData:ProfileType) => Promise<ProfileType>
}
// type contactValueType = {
//     "facebook": string,
//     "website": string,
//     "vk": string,
//     "twitter": string,
//     "instagram": string,
//     "youtube": string,
//     "github": string,
//     "mainLink": string
// }

export type ContactValueType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
/*type contactValueType = {
    "facebook": string | null,
    "website": string | null,
    "vk": string | null,
    "twitter": string | null,
    "instagram": string | null,
    "youtube": string | null,
    "github": string | null,
    "mainLink": string | null
}*/

export type ContactType = {
    contactTitle: string,
    contactValue: string | null
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profile,
                                                    status,
                                                    updateStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile
                                                }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then (
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div>
            {/* <div className={s.content}>
                <img
                    src={photoFon}
                    // src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"

                    alt=""/>
            </div>*/}
            <div className={s.discriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>:
            {Object
                .keys(profile.contacts)
                .map(key => {
                    return <Contact contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactValueType]}/>
                })}
        </div>
    </div>
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;

// Video: 97,  time: 15.23
// Video: 11 - React + TypeScript / Типизируем ВСЁ / React JS - Путь Самурая 2.0 , time: 1.18.30