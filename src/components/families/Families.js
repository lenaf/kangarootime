import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlexRow, FlexColumn, ProfilePicture, StyledLink} from '../'
import { fetchChildren } from '../../store'

/**
 * COMPONENT
 */
class Families extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <div>Child Roster</div>
        <FlexRow>
        {children.map((child, i) => (
          <StyledLink key={i} to={{
            pathname: `/child/${i}`,
            state: {
              child: child
            }
          }}>
            <FlexColumn>
              <ProfilePicture key={i} src={child.picture.large}></ProfilePicture>
              <span>{child.name.first + " " + child.name.last}</span>
            </FlexColumn>
          </StyledLink>
        ))}      
      </FlexRow>
    </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    children: state.children
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchChildren())
    }
  }
}

export default connect(mapState, mapDispatch)(Families);