import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Albums from "./Albums";
import Photos from "./Photos";
import {loadAlbums, loadPhotos} from "../redux/action";

function App(props) {
    const dispatch = useDispatch();

    const loadingPhotos = useSelector(state => state.photos.loading);
    const loadingAlbums = useSelector(state => state.albums.loading)

    useEffect(() => {
        dispatch(loadAlbums());
        dispatch(loadPhotos());
    },[])

    if (loadingAlbums || loadingPhotos){
        return (
            <div>
                loading
            </div>
        )
    }
    return (

        <div className='container'>
            <Albums/>
            <Photos/>
        </div>
    );
}

export default App;