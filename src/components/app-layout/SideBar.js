import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, MenuItem, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, Settings, MailOutline, Collections, School, Today, Domain, CreditCard, People, AssignmentInd, GridOn } from '@material-ui/icons';
import { colors, dimensions } from '../../constants';
import { StyledLink } from '../';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: dimensions.sideBarWidth,
    flexShrink: 0,
    background: colors.indigo,
    color: colors.white
  }
}))

function SideBar () {
  const classes = useStyles()

  return (
    <Drawer
      classes={{
        paper: classes.drawer
      }}
      variant="persistent"
      anchor="left"
      open={true}>
      <List>
        <ListItem style={{ background: colors.darkIndigo }} >
          <ListItemIcon><Home/></ListItemIcon>
          <ListItemText>KangarooTime</ListItemText>
        </ListItem>
        <StyledLink>
          <MenuItem>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/centers">
          <MenuItem>
            <ListItemIcon><Domain/></ListItemIcon>
            <ListItemText>Centers</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/messages">
          <MenuItem>
            <ListItemIcon><MailOutline/></ListItemIcon>
            <ListItemText>Messages</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/education">
          <MenuItem>
            <ListItemIcon><School/></ListItemIcon>
            <ListItemText>Education</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/billing">
          <MenuItem>
            <ListItemIcon><CreditCard/></ListItemIcon>
            <ListItemText>Billing</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/staff">
          <MenuItem>
            <ListItemIcon><AssignmentInd/></ListItemIcon>
            <ListItemText>Staff Directory</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/rooming">
          <MenuItem>
            <ListItemIcon><GridOn/></ListItemIcon>
            <ListItemText>Rooming</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/families">
          <MenuItem>
            <ListItemIcon><People/></ListItemIcon>
            <ListItemText>Families</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/calendar">
          <MenuItem>
            <ListItemIcon><Today/></ListItemIcon>
            <ListItemText>Calendar</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/gallery">
          <MenuItem>
            <ListItemIcon><Collections/></ListItemIcon>
            <ListItemText>Gallery</ListItemText>
          </MenuItem>
        </StyledLink>
        <StyledLink to="/settings">
          <MenuItem>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
        </StyledLink>
      </List>
    </Drawer>
  )
}

export default SideBar
