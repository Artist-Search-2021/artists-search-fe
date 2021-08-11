export const fetchTitles = async (id) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`);
  const { recordings } = await res.json();
  console.log(recordings);
  ; return recordings;
}