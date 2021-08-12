import React, { useState, useEffect } from 'react';
import ArtistList from '../display/ArtistList';
import Loading from '../common/Loading';
import Search from '../controls/Search.js';
import { fetchArtists } from '../../services/artistApi.js';
import { useParams } from 'react-router-dom';

export default function Home() {
  const [page, setPage] = useState(0);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearch] = useState('');
  const { id } = useParams();
  useEffect(() => {
    if(searchTerm !== '') {
      setLoading(true);
      fetchArtists(page, searchTerm).then(setArtists).finally(setLoading(false));
    }
  }, [page]);
  useEffect(() => {
    if(id) {
      setLoading(true);
      setSearch(id);
      fetchArtists(page, id).then(setArtists).finally(setLoading(false));
    }
  }, []);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    fetchArtists(page, searchTerm).then(setArtists).finally(() => setLoading(false));
    setSearch(searchTerm);
  };

  const handlePageChange = (newPage) => {
    setPage(prevPage => prevPage + newPage);
  };

  if(loading) return <Loading />;
  return (
    <div>
      <p>Search artists</p>
      <Search onSearch={handleSearch} />
      <ArtistList artists={artists} />
      <button onClick={() => handlePageChange(-25)} disabled={page <= 0}>←</button>
      <button onClick={() => handlePageChange(25)}>→</button>
    </div>
  );
}
