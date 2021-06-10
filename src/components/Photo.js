import React from 'react';

function Photo(props) {
    return (
        <div>
            <img src={props.photo.url} alt="image"/>
        </div>
    );
}

export default Photo;