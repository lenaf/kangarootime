import React from 'react';
import { InputBase, Select } from '@material-ui/core';
import { FlexRow, FlexColumn, InputLabel } from '../';

function ClassRoomDetails (){  
  
  return (
    <FlexColumn >
      <h4>Classroom Details</h4>
      <form>
        <FlexRow>
          <InputLabel>Enrollment Date</InputLabel>
          <InputBase fullWidth={true} placeholder="Enter the enrollment date"/>
        </FlexRow>
        <FlexRow>
          <InputLabel>Plan</InputLabel>
          <InputBase fullWidth={true} placeholder="Enter the enrollment date"/>
        </FlexRow>
        <FlexRow>
          <InputLabel>Classroom</InputLabel>
          <Select fullWidth={true}/>
        </FlexRow>
        <FlexRow>
          <InputLabel>Primary Group</InputLabel>
          <Select fullWidth={true}/>
        </FlexRow>
        <FlexRow>
          <InputLabel>Automatic Changes</InputLabel>
          <InputBase fullWidth={true} placeholder="Specify changes"/>
        </FlexRow>
        <FlexRow>
          <InputLabel>Bus Rosters</InputLabel>
          <InputBase fullWidth={true} placeholder="Designated bus"/>
        </FlexRow>   
      </form>
    </FlexColumn>
    );
  }
  
export default ClassRoomDetails;
