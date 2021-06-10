export const loadAlbums = () => {
    return dispatsh => {
        dispatsh({type: 'albums/load/start'})
        fetch('https://jsonplaceholder.typicode.com/albums/?_limit=15')
            .then(response => response.json())
            .then(json => {
                dispatsh({
                    type: 'albums/load/success',
                    payload: json
                })
            })
    }

}

export const loadPhotos = () => {
    return dispatsh => {
        dispatsh({type: 'photos/load/start'})
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=1000')
            .then(response => response.json())
            .then(json => {
                dispatsh({
                    type: 'photos/load/success',
                    payload: json
                })
            })
    }

}
export const selectAlbum = (albumId) => {
    return {
        type: 'album/select',
        payload: albumId
    }
}
export const setFilterText = (text) => {
    return{
        type: 'filter/set',
        payload: text
    }
}