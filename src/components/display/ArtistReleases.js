import React, { useEffect, useState } from 'react';
import useRelease from '../../state/release';
import Loading from '../common/Loading';
import { useLocation, Link } from 'react-router-dom';
import { buttonStyles } from '../common/ButtonStyles';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  releases: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  releaseGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: 10,
  },
  li: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: [1, 'solid', '#ccc'],
    maxWidth: 295,
    padding: [0, 5]
  },
  link: {
    color: 'black',
  }
});

export default function ArtistReleases() {
  const [page, setPage] = useState(0);
  const [releases, loading] = useRelease(page);
  const artistName = useLocation();

  const buttonClasses = buttonStyles();
  const classes = useStyles();

  const releaseElements = releases.map(release => {

    return (
      <li className={classes.li} key={release.id}>
        <Link className={classes.link} to={{
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

  if (loading) return <Loading />;
  return (
    <div className={classes.releases}>
      <ul className={classes.releaseGrid}>
        {releaseElements}
      </ul>
      <div className={buttonClasses.buttons}>
        <button className={buttonClasses.button} onClick={() => handlePageChange(-10)} disabled={page <= 0}>←</button>
        <button className={buttonClasses.button} onClick={() => handlePageChange(10)}>→</button>
      </div>
    </div>
  );

}


//https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder-1.jpg?fit=250%2C250&ssl=1
