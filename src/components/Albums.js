import React from 'react';
import {useSelector} from "react-redux";
import Album from "./Album";

function Albums(props) {
    const albums = useSelector(state => state.albums.albums);

    return (
        <div className='albums'>
            <h1>Пользователи</h1>
            <ul>
                {albums.map(album => {
                    return <Album key={album.id} album={album} />

                })}
            </ul>
        </div>
    );
}

export default Albums;