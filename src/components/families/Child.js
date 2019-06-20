import React from 'react';
import {ProfileTab, ProfilePicture} from '..'

class Child extends React.Component {

  render (){
    const { child } = this.props.location.state;

    return (
      <div >
        <ProfilePicture src={child.picture.large}></ProfilePicture>
        <span>{child.name.first + " " + child.name.last}</span>
        <ProfileTab child = {child}/>
      </div>
    )
  }
}
  
export default Child;
