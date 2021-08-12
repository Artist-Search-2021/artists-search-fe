import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <img src="https://vinylgif.com/gifs/201412/spinning-7-inch.gif" />
    </div>
  );
}
