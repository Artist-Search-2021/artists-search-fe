export const fetchArtists = async (page, searchTerm) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25&offset=${page}`);
  const { artists } = await res.json();
  return artists;
};


