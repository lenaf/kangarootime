import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../store'

/**
 * COMPONENT
 */
class Gallery extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { photos } = this.props

    return (
      <div>
      {photos.map((photo, i) => (
        <img key={i} src={photo.urls.thumb} ></img>
      ))}      
    </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    photos: state.photos
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchPhotos())
    }
  }
}

export default connect(mapState, mapDispatch)(Gallery)

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }