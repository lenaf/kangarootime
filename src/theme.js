import { createMuiTheme } from "@material-ui/core/styles";
import { dimensions} from './constants';

export default createMuiTheme({
  overrides: {
    MuiListItem:{
      root: {
          height: dimensions.listItemHeight,
          margin: 0,
          padding: 0,
          color: 'inherit',
          'flex-grow': 1
      }    
    },
    MuiList:{
      padding:{
        'padding-top': 0,
        'padding-bottom': 0
      },
      root: {
          margin: 0,
          padding: 0,
          'text-decoration': 'none',
          color: 'inherit'
      }    
    },
    MuiListItemIcon:{
      root: {
        color: 'inherit',
        'min-width': 30 
      }
    }
  }
});