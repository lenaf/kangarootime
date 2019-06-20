import axios from 'axios'

//ACTION TYPES
const GOT_PHOTOS = 'GOT_PHOTOS'

//INITIAL STATE
const photos = []

//ACTION CREATORS
const gotPhotos = photos => ({ type: GOT_PHOTOS, photos })

//THUNK CREATORS

export const fetchPhotos = () =>
  dispatch =>
    axios({
      method: 'get',
      url: "https://api.unsplash.com/collections/3053437/photos/?per_page=60&client_id=d56b908615f9b7277c62de77bc082ede5126aab6fe2ece9ed3a72d51fd4a2236",
      dataType: "json"
    })
      .then(res => {
        const photos = res.data
        photos.forEach(photo => {photo.showInfo = false})
        dispatch(gotPhotos(photos))
      }
      )
      .catch(err => console.log(err))

// REDUCER
export default function (state = photos, action) {
  switch (action.type) {
    case GOT_PHOTOS:
      return action.photos
    default:
      return state
  }
}