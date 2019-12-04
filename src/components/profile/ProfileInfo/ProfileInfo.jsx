import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) =>
{
    if(!props.profile)
    {
        return <Preloader />
    }

    return(
      <div >
        <div>
          <img src="https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg" />
        </div>  
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="profilePhoto"/>
            <div>
                <div>My name is {props.profile.fullName}</div>
                <span>{props.profile.aboutMe}</span>
            </div>

            <div className={s.occupation} >
                <div>
                    Am i looking for a job: {props.profile.lookingForAJob}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>

        </div>
      </div>

    );
}

export default ProfileInfo;
