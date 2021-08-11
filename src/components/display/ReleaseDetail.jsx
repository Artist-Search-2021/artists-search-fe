import React from 'react';
import useTitle from '../../state/title';
import Loading from '../common/Loading';
import { useLocation, Link } from 'react-router-dom';

export default function ReleaseDetail() {
  const [titles, loading] = useTitle();
  const artistName = useLocation();
  const name = artistName.state.artistName.state.artistName;


  const releaseDetailElements = titles.map(title => {
    return (
      <li key={title.id}>
        <Link to={{
          pathname: `/release/lyrics/${title.title}`,
          state: { artistName: name }
        }}>
          <p>{title.title}</p>
        </Link>
      </li>
    );
  });
  if(loading) return <Loading />;
  return (
    <div className="ReleaseDetail">
      <h1>Release Detail</h1>
      <ul>{releaseDetailElements}</ul>
    </div>
  );
}
