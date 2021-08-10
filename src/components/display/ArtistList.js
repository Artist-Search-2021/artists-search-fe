import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistList({ artists }) {
  console.log(artists);
  const artistsElements = artists.map(artist => (
    <li key={artist.id}>
      <p><Link to={`/artist/${artist.id}`}>{artist.name}</Link> | {artist.area ? artist.area.name : 'Unknown'}</p>
    </li>
  ));

  return (
    <div>
      <ul>{artistsElements}</ul>
    </div>
  )
};
