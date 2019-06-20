import React, {Component} from 'react';
import {FlexColumn, FlexRow, SideBar, TopBar, Routes} from './components';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  render(){
    
    return (
      <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <FlexRow>
          <SideBar />
          <FlexColumn>
            <TopBar />
            <Routes />
          </FlexColumn>
        </FlexRow>
      </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
