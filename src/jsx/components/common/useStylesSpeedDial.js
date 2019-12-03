/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/components/common/useStylesSpeedDial.jsx
*/
import { makeStyles } from '@material-ui/core/styles';
//
const useStyles = makeStyles(theme => ({
  root: {
    // height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));
//
export default useStyles;
