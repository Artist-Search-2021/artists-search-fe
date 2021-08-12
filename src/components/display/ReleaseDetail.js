import React from 'react';
import useTitle from '../../state/title';
import Loading from '../common/Loading';
import { useLocation, Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  li: {
    listStyle: 'none',
  },
  link: {
    color: 'black'
  },
  ul: {
    padding: 0
  }
});

export default function ReleaseDetail() {
  const [titles, loading] = useTitle();
  const artistName = useLocation();
  const name = artistName.state.artistName.state.artistName;

  const classes = useStyles();

  const releaseDetailElements = titles.map(title => {
    return (
      <li className={classes.li} key={title.id}>
        <Link className={classes.link} to={{
          pathname: `/release/lyrics/${title.title}`,
          state: { artistName: name }
        }}>
          <p>{title.title}</p>
        </Link>
      </li>
    );
  });
  if (loading) return <Loading />;
  return (
    <div className={classes.detailContainer}>
      <h2>Tracklist</h2>
      <ul className={classes.ul}>{releaseDetailElements}</ul>
    </div>
  );
}
