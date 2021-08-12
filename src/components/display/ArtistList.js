import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  li: {
    listStyle: 'none',
  },
  link: {
    color: 'black'
  }
})

export default function ArtistList({ artists }) {

  const classes = useStyles();

  const artistsElements = artists.map(artist => (
    <li className={classes.li} key={artist.id}>
      <p><Link className={classes.link} to={{
        pathname: `/artist/${artist.id}`,
        state: { artistName: artist.name }
      }}>{artist.name}</Link> | {artist.area ? artist.area.name : 'Unknown'}</p>
    </li>
  ));

  return (
    <div>
      <ul>{artistsElements}</ul>
    </div>
  );
}
