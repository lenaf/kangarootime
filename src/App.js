import React, {Component} from 'react';
import {FlexColumn, FlexRow, SideBar, TopBar, Routes} from './components';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";

class App extends Component {
  render(){
    
    return (
      <MuiThemeProvider theme={theme}>
        <FlexRow>
          <SideBar />
          <FlexColumn>
            <TopBar />
            <Routes />
          </FlexColumn>
        </FlexRow>
      </MuiThemeProvider>
    )
  }
}

export default App;
