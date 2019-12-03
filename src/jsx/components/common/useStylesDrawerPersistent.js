/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/components/common/useStylesDrawerPersistent.js

themeDrawer
*/
import { makeStyles } from '@material-ui/core/styles';
//
const drawerWidthJs = 140;
const useStylesDrawer = makeStyles(themeDrawer => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: themeDrawer.transitions.create(['margin', 'width'], {
      easing: themeDrawer.transitions.easing.sharp,
      duration: themeDrawer.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidthJs}px)`,
    marginLeft: drawerWidthJs,
    transition: themeDrawer.transitions.create(['margin', 'width'], {
      easing: themeDrawer.transitions.easing.easeOut,
      duration: themeDrawer.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: themeDrawer.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidthJs,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidthJs,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: themeDrawer.spacing(0, 1),
    ...themeDrawer.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: themeDrawer.spacing(3),
    transition: themeDrawer.transitions.create('margin', {
      easing: themeDrawer.transitions.easing.sharp,
      duration: themeDrawer.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidthJs,
  },
  contentShift: {
    transition: themeDrawer.transitions.create('margin', {
      easing: themeDrawer.transitions.easing.easeOut,
      duration: themeDrawer.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
//
export default useStylesDrawer;

// End
