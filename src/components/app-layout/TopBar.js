import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, InputBase, ListItemIcon } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import { colors, dimensions } from '../../constants';
import { FlexRow } from '../';

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${dimensions.sideBarWidth}px)`,
    height: dimensions.topBarHeight,
    marginLeft: dimensions.sideBarWidth,
    flexGrow: 1,
    background: colors.white,
    color: colors.charcoalGrey,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  account: {
    flexGrow: 0
  }
}));

function TopBar (){
  const classes = useStyles();    
  
  return (
    <AppBar className={classes.appBar} position="fixed">
        <InputBase placeholder="Search…"/>
        <FlexRow />
        <FlexRow className={classes.account}>
          <div>John Doe</div>
          <ListItemIcon><Face/></ListItemIcon>
        </FlexRow>
    </AppBar>       
  );
}
  
export default TopBar;
