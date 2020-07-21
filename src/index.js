import React, { useState, useContext } from 'react'
import {CircularProgress, Backdrop, makeStyles} from '@material-ui/core';

const BackdropContext = React.createContext('backdrop-context');

const useStyles = makeStyles((theme) => ({
  backdropLight: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#000',
  },backdropDark: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const BackdropProvider = ({theme,progress,children}={theme:'light',progress:<CircularProgress/>}) => {
  const [open,setOpen]=useState(false);

  const classes = useStyles();

  const openBackdrop = ()=>{
    setOpen(true);
  }
  const closeBackdrop = ()=>{
    setOpen(false);
  }
  return (
  <BackdropContext.Provider value={[openBackdrop,closeBackdrop]}>
    {children}
    <Backdrop className={theme='light'?classes.backdropLight:classes.backdropDark} open={open} onClick={closeBackdrop}>
        {progress}
      </Backdrop>
  </BackdropContext.Provider>
  );
}

export const useBackdrop = ()=> useContext(BackdropContext);