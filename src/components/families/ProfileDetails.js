import React, { Component } from 'react'
import { InputBase, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { FlexRow, DateInput, InputLabel } from '../';

class ProfileDetails extends Component {
  render() {
    const child  = this.props.child;   
    return (
      <div >
        <h4>Profile Details</h4>
            <form>
              <FlexRow>
                <InputLabel>Child Name</InputLabel>
                <InputBase value = {child.name.first} fullWidth={true} placeholder="First" />
                <InputBase value = {child.name.last} fullWidth={true} placeholder="Last"/>
              </FlexRow>
              <FlexRow>
                <InputLabel>Street Name</InputLabel>
                <InputBase value = {child.location.street} fullWidth={true} placeholder="Street Address Line 1"/>
              </FlexRow>
              <FlexRow>
                <InputLabel>Street Name</InputLabel>
                <InputBase fullWidth={true} placeholder="Street Address Line 2"/>
              </FlexRow>
              <FlexRow>
                <InputLabel></InputLabel>
                <InputBase fullWidth={true} placeholder="City"/>
                <InputBase fullWidth={true} placeholder="State"/>
              </FlexRow>
              <FlexRow>
                <InputLabel>Sex</InputLabel>
                <RadioGroup name="sex" row={true}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Prefer not to say" />
                </RadioGroup>
              </FlexRow>
              <FlexRow>
                <InputLabel>Birthdate</InputLabel>
                <DateInput/>
              </FlexRow>
            </form>
      </div>
      );
    }
  }
  
export default ProfileDetails;
