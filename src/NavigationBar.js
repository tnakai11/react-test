import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AlarmIcon from '@material-ui/icons/Alarm';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { Link as RouterLink, Route, BrowserRouter as Router } from 'react-router-dom';
import { lightBlue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexGrow: 1,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  const [anchorElHome, setAnchorElHome] = React.useState(null);
  const [anchorElCounter, setAnchorElCounter] = React.useState(null);
  const [anchorElTimer, setAnchorElTimer] = React.useState(null);
  const handlePopoverHomeOpen = (event) => {
    setAnchorElHome(event.currentTarget);
  };
  const handlePopoverHomeClose = () => {
    setAnchorElHome(null);
  };
  const handlePopoverCounterOpen = (event) => {
    setAnchorElCounter(event.currentTarget);
  };
  const handlePopoverCounterClose = () => {
    setAnchorElCounter(null);
  };
  const handlePopoverTimerOpen = (event) => {
    setAnchorElTimer(event.currentTarget);
  };
  const handlePopoverTimerClose = () => {
    setAnchorElTimer(null);
  };

  const openHome = Boolean(anchorElHome);
  const openCounter = Boolean(anchorElCounter);
  const openTimer = Boolean(anchorElTimer);

  const PopOverHome = ()=>{
      return (
        <Popover
            id="mouse-over-popover-home"
            className={classes.popover}
            classes={{
            paper: classes.paper,
            }}
            open={openHome}
            anchorEl={anchorElHome}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverHomeClose}
            disableRestoreFocus
        >
            <Typography>Home</Typography>
        </Popover>
      )
  }

  const PopOverCounter = ()=>{
    return (
      <Popover
          id="mouse-over-popover-counter"
          className={classes.popover}
          classes={{
          paper: classes.paper,
          }}
          open={openCounter}
          anchorEl={anchorElCounter}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
          }}
          onClose={handlePopoverCounterClose}
          disableRestoreFocus
      >
          <Typography>Counter</Typography>
      </Popover>
    )
  }

  const PopOverTimer = ()=>{
    return (
      <Popover
          id="mouse-over-popover-timer"
          className={classes.popover}
          classes={{
          paper: classes.paper,
          }}
          open={openTimer}
          anchorEl={anchorElTimer}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
          }}
          onClose={handlePopoverTimerClose}
          disableRestoreFocus
      >
          <Typography>Timer</Typography>
      </Popover>
    )
  }

  return (
    <div className={classes.root}>
        <AppBar position="static" style={{ background: lightBlue[50]}} >
            <Toolbar>
            <Box position="" margin="auto">
                <RouterLink to="/" 
                    onMouseEnter={handlePopoverHomeOpen}
                    onMouseLeave={handlePopoverHomeClose}>
                    <HomeIcon style={ {color: lightBlue[400],}}/>
                </RouterLink>
                <RouterLink to="/counter"
                    onMouseEnter={handlePopoverCounterOpen}
                    onMouseLeave={handlePopoverCounterClose}>
                    <PlusOneIcon style={{ color: lightBlue[400] }}/>
                </RouterLink>
                <RouterLink to="/timer"
                    onMouseEnter={handlePopoverTimerOpen}
                    onMouseLeave={handlePopoverTimerClose}>
                    <AlarmIcon style={{ color: lightBlue[400] }}/>
                </RouterLink>
                
                <Route exact path="/"><Typography style={{ color: lightBlue[400] }}>Home</Typography></Route>
                <Route path="/counter"><Typography style={{ color: lightBlue[400] }}>Counter</Typography></Route>
                <Route path="/timer"><Typography style={{ color: lightBlue[400] }}>Timer</Typography></Route>
            </Box>
            </Toolbar>
        </AppBar>
        <PopOverHome/>
        <PopOverCounter/>
        <PopOverTimer/>
    </div>
  );
}