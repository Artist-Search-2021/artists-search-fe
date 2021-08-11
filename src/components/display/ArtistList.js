import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function ArtistList({ artists }) {
 
  const artistsElements = artists.map(artist => (
    <li key={artist.id}>
      <p><Link to={{
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
