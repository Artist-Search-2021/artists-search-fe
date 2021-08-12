import React, { useEffect } from 'react';
import { fetchLyrics } from '../../services/lyricsApi';
import { useState } from 'react';
import Loading from '../common/Loading';
import { useParams, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { classes } from 'istanbul-lib-coverage';

const useStyles = createUseStyles({
  lyricsContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem'
  },
  lyrics: {
    width: 250,
    textAlign: 'center',
  }
});

export default function SongLyrics() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const artistName = useLocation();
  const name = artistName.state.artistName;
  console.log(name);
  const classes = useStyles();

  useEffect(() => {
    fetchLyrics(name, id)
      .then(lyrics => setLyrics(lyrics))
      .finally(setLoading(false));
  }, []);

  if (loading) return <Loading />;
  return (
    <div className={classes.lyricsContainer} data-testid="lyrics">
      <div className={classes.lyrics}>{lyrics}</div>
    </div>
  );
}
