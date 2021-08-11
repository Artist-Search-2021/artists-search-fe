import React from 'react';
import useRelease from '../../state/release';
import Loading from '../common/Loading';
import { useLocation, Link } from 'react-router-dom';

export default function ArtistReleases() {
  const [releases, loading, artistId] = useRelease();
  let artistName = useLocation();
  console.log(artistName);
  console.log(releases);
  //fetch the id from params
  // loading state
  //return releases w/ pictures
  //fetch pic for each release

  // const getImage = async (id) => {
  //   const image = await fetch(`http://coverartarchive.org/release/${id}/front`);

  //   if(image.status === 200) {
  //     console.log(image, '----------');
  //     return image.url;
  //   } else {
  //     return 'http://placehold.it/300x300';
  //   }
  // };



  const releaseElements = releases.map(release => {

    return (
      <li key={release.id}>
        <Link to={{
          pathname: `/release/${release.id}`,
          state: { artistName: artistName }
        }}>
          <p>{release.title}</p>

          <img style={{ width: '200px' }}
            src={`http://coverartarchive.org/release/${release.id}/front`}
          />
        </Link>
      </li>
    );
  });



  if (loading) return <Loading />;
  return (
    <div>
      <ul>
        {releaseElements}
      </ul>
    </div>
  );

}


//https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder-1.jpg?fit=250%2C250&ssl=1
