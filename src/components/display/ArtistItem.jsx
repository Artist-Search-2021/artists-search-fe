import React from 'react';
import { Link } from 'react-router-dom';


export default function ArtistItem() {
  return (
    <p>
      <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
      | {artist.area ? artist.area.name : 'Unknown'}
    </p>
  );
}
