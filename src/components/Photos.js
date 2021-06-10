import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {setFilterText} from "../redux/action";

function Photos(props) {
    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos.photos);
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId);

    const filter = useSelector(state => state.photos.filter)

    const filteredPhoto = photos.filter(photo => {
        if (photo.albumId === selectedAlbumId) {
            return true
        }
        return false
    });
    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }

    if (selectedAlbumId === null) {
        return (
            <div className='no-album-selected'>
                <b>выберите пользователя</b>
            </div>
        )
    }

    return (
        <div className='photos'>
            <h1>Фото</h1>
            <div className='filter'>
                <input
                    type="text"
                    placeholder='поикс фото'
                    value={filter}
                    onChange={handleChangeFilter}/>
            </div>

            <ul>
                {filteredPhoto.map(photo => {
                    return <Photo photo={photo} key={photo.id}/>
                })}
            </ul>
        </div>
    );
}

export default Photos;