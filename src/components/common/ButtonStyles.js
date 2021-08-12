import React from "react";
import { createUseStyles } from "react-jss";

export const buttonStyles = createUseStyles({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      border: [1, 'solid', 'black'],
      backgroundColor: 'white',
      margin: 5,
    },
    '& button:hover': {
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
    },
    '& button:hover:disabled': {
      cursor: 'auto',
      backgroundColor: 'white',
      color: 'lightgrey',
    }
  }
});
