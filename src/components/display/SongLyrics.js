import React, { useEffect } from 'react';
import { fetchLyrics } from '../../services/lyricsApi';
import { useState } from 'react';
import Loading from '../common/Loading';
import { useParams, useLocation } from 'react-router-dom';

export default function SongLyrics() {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const artistName = useLocation();
  const name = artistName.state.artistName;

  useEffect(() => {
    fetchLyrics(name, id)
      .then(lyrics => setLyrics(lyrics))
      .finally(setLoading(false));
  }, []);

  if (loading) return <Loading />;
  return (
    <div data-testid='lyrics'>
      {lyrics}
    </div>
  );
}
