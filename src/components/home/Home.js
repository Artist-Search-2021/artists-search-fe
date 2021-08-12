import React, { useState, useEffect } from 'react';
import ArtistList from '../display/ArtistList';
import Loading from '../common/Loading';
import Search from '../controls/Search.js';
import { fetchArtists } from '../../services/artistApi.js';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { buttonStyles } from '../common/ButtonStyles';

const useStyles = createUseStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function Home() {
  const [page, setPage] = useState(0);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearch] = useState('');

  const classes = useStyles();
  const buttonClasses = buttonStyles();

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      fetchArtists(page, searchTerm).then(setArtists).finally(setLoading(false));
    }
  }, [page]);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    fetchArtists(page, searchTerm).then(setArtists).finally(() => setLoading(false));
    setSearch(searchTerm);
  };

  const handlePageChange = (newPage) => {
    setPage(prevPage => prevPage + newPage);
  };

  if (loading) return <Loading />;
  return (
    <div className={classes.home}>
      <p>Search artists</p>
      <Search onSearch={handleSearch} />
      <ArtistList artists={artists} />
      <div className={buttonClasses.buttons}>
        <button className={buttonClasses.button} onClick={() => handlePageChange(-25)} disabled={page <= 0}>←</button>
        <button className={buttonClasses.button} onClick={() => handlePageChange(25)} disabled={!searchTerm}>→</button>
      </div>
    </div>
  );
}
