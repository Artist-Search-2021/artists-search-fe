export const fetchLyrics = async () => {
  const res = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=metallica&song=ride the lightning`);
  const { lyrics } = await res.text();
  console.log(lyrics);
  return lyrics;
};
