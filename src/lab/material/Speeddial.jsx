/*jshint esversion: 9 */
/*
File: ../keeper/src/jsx/lab/material/speeddial.jsx
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
// import SaveIcon from '@material-ui/icons/Save';
// import PrintIcon from '@material-ui/icons/Print';
// import ShareIcon from '@material-ui/icons/Share';
// import FavoriteIcon from '@material-ui/icons/Favorite';
//
import actionsSpeedDial from "../../jsx/components/common/speedDialActions.js";
import useStyles from "../../jsx/components/common/useStylesSpeedDial.js";
//
export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // function used with a button to trigger speedDial button visibility state
  // const [hidden, setHidden] = React.useState(false);
  //
  // const handleVisibility = () => {
  //   setHidden(prevHidden => !prevHidden);
  // };
  //
  const handleOpen = () => {
    setOpen(true);
  };
  //
  const handleClose = () => {
    setOpen(false);
  };
  // <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  // SpeedDial atribute
  // hidden={hidden}
  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="left">
        {actionsSpeedDial.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="top"
            onClick={handleClose}/>
        ))}
      </SpeedDial>
    </div>
  );
}
