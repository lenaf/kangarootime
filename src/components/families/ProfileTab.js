import React, { Component } from 'react'
import { ProfileDetails, ClassRoomDetails, OtherLinks, FlexColumn, Box } from '../'

class ProfileTab extends Component {
  render() {
    const child  = this.props.child;

    return (
      <div >
        <Box>
          <FlexColumn>
            <ProfileDetails child = {child}/>
            <ClassRoomDetails />
          </FlexColumn>
          <FlexColumn>
            <OtherLinks />
          </FlexColumn>
        </Box>
      </div>
    )
  }
}
  
export default ProfileTab;
