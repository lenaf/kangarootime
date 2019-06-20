import React from 'react';
import moment from 'moment';
import { Select, MenuItem} from '@material-ui/core';
import { FlexRow, FlexColumn } from '../';

//i didn't finish this!

function DateInput (){  
  
  return (
      <FlexRow>
        <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FlexRow>
    );
  }
  
export default DateInput;
