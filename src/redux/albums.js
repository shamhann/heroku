
const initialstate = {
    filter: "",
    selectedAlbumId: null,
    albums:[],

    loading:false,
}

export default  (state = initialstate, action) => {
    switch (action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loading: true
            }
        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case 'album/select':
            return {
                ...state,
                selectedAlbumId: action.payload
            }

        default:
            return state;;
    }
}