import React from 'react';
import useRelease from '../../state/release';
import Loading from '../common/Loading';

export default function ArtistReleases() {
  const [releases, loading] = useRelease();
  console.log(releases);
  //fetch the id from params
  // loading state
  //return releases w/ pictures
  //fetch pic for each release
  if(loading) return <Loading/>;
  return (
    <div>
    Hi
      {/* <ReleaseList releases={releases}/> */}
    </div>
  );
}


//https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder-1.jpg?fit=250%2C250&ssl=1
