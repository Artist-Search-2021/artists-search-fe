export const fetchReleases = async (page, artist) => {
  const res = await fetch(`https://musicbrainz.org/ws/2/release?artist=${artist}&fmt=json&limit=10&offset=${page}`);
  const { releases } = await res.json();

  return releases;
};
