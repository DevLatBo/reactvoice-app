import React from 'react';

import Card from '../UI/Card/Card';

const ProfileData = (props) => {
    const information = props.data;
    let identityData = information.map((info) => {
        return (
            <div key = {info.id}>
                <p><span>{info.label}:</span> {info.value}</p>
            </div>
        );
    })
    return(
        <Card>
          {identityData}  
        </Card>
    )
}

export default ProfileData;