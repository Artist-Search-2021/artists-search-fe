export const fetchTitles = async (id) => {
  const res = await fetch(`https://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`);
  const { recordings } = await res.json();
  return recordings;
};
