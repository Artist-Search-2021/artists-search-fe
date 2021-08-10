import React from 'react';
import Loading from '../../common/Loading';
import Search from '../../Controls/Search';

export default function Home() {
  return (
    <div>
      <p>Search artists</p>
      <Search /> 
      {/* <ArtistList artist={artists}/> */}
    </div>
  );
}
