import React, { useState } from 'react';
import ArtistList from '../../display/ArtistList';
import Loading from '../../common/Loading';
import Search from '../../controls/Search';
import { fetchArtists } from '../../../services/artistApi.js';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    fetchArtists(0, searchTerm).then(setArtists).finally(() => setLoading(false));
  
  };

  if(loading) return <Loading />;
  return (
    <div>
      <p>Search artists</p>
      <Search onSearch={handleSearch} />
      <ArtistList artists={artists} />
    </div>
  );
}
