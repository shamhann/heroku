import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum,} from "../redux/action";


function Album(props) {
    const dispatch = useDispatch();
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId)

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }

    return (
        <li className={`${props.album.id === selectedAlbumId ? "btnActive" : "btn"}`} onClick={handleSelectAlbum}>
            <div className='album-title' >
                {props.album.title}
            </div>
        </li>
    );
}

export default Album;