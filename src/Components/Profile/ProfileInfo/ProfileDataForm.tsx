import React from "react";
import {creatField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileInfoType} from "./ProfileInfo";
import {ProfileType} from "../../../redux/store";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";


// Video: 97,  time: 51.30
// Video: 11 - React + TypeScript / Типизируем ВСЁ / React JS - Путь Самурая 2.0 , time: 1.18.30
type ProfileDataFormPropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType,
    ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({
                                                                 handleSubmit,
                                                                 profile,
                                                                 error
                                                             }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full name</b>: {creatField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {creatField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional skills</b>:
            {creatField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>

        <div>
            <b>About me</b>:
            {creatField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>:
            {Object
                .keys(profile.contacts)
                .map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {creatField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                    /*                    return <Contact contactTitle={key}
                                                        contactValue={profile.contacts[key as keyof ContactValueType]}/>*/
                })}
        </div>
    </form>
}
// type FormDataType = {
//     email: string
//     password: string
//     rememberMe: boolean
// }
const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm