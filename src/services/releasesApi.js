export const fetchReleases = async (artist) => {
  const res = await fetch(`https://musicbrainz.org/ws/2/release?artist=${artist}&fmt=json`);
  const { releases } = await res.json();
  
  return releases;
};
