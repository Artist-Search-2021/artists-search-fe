import React, { useEffect } from 'react';
import { fetchLyrics } from '../../services/lyricsApi';
export default function SongLyrics() {
  useEffect(() => {
    fetchLyrics()
      .then(lyrics => console.log(lyrics))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      Lyrics
    </div>
  );
}
