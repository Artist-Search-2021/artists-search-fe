import React, { useEffect, useState } from 'react';
import useRelease from '../../state/release';
import Loading from '../common/Loading';
import { useLocation, Link } from 'react-router-dom';

export default function ArtistReleases() {
  const [page, setPage] = useState(0);
  const [releases, loading] = useRelease(page);
  const artistName = useLocation();

  const releaseElements = releases.map(release => {

    return (
      <li key={release.id}>
        <Link to={{
          pathname: `/release/${release.id}`,
          state: { artistName }
        }}>
          <p>{release.title}</p>

          <img style={{ width: '200px' }}
            src={`http://coverartarchive.org/release/${release.id}/front`}
            onError={(e) => (e.target.onerror = null, e.target.src = '/public/placeholder.png')} />
        </Link>
      </li>
    );
  });

  const handlePageChange = (newPage) => {
    setPage(prevPage => prevPage + newPage);
  };

  if(loading) return <Loading />;
  return (
    <div>
      <ul>
        <button onClick={() => handlePageChange(-10)} disabled={page <= 0}>←</button>
        <button onClick={() => handlePageChange(10)}>→</button>
        {releaseElements}
      </ul>
    </div>
  );

}


//https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder-1.jpg?fit=250%2C250&ssl=1
