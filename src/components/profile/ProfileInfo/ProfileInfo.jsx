import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>
{
    return(
      <div >
        <div>
          <img src="https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg" />
        </div>  
        <div className={s.descriptionBlock}>
            ava + desc
        </div>
      </div>

    );
}

export default ProfileInfo;
