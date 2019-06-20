import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { dimensions } from '../../constants';
import { Gallery, Families, Child } from '../';

const useStyles = makeStyles(theme => ({
  route: {
    width: `calc(100% - ${dimensions.sideBarWidth}px)`,
    marginLeft: dimensions.sideBarWidth,
    marginTop: dimensions.topBarHeight
  }
}))

function Routes () {
  
  const classes = useStyles();

  return (
    <div className={classes.route}>
      <Route exact = {true} path = {'/gallery'} component= {Gallery}/>
      <Route exact = {true} path = {'/families'} component= {Families}/>
      <Route exact = {true} path = {'/child/:id'} component={Child}/>
    </div>
  )
}

export default Routes
