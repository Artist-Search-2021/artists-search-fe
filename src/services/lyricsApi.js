import parser from 'fast-xml-parser';
export const fetchLyrics = async () => {
  //cors proxy server + endpoint
  const res = await fetch('https://afternoon-taiga-46076.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=metallica&song=ride the lightning');
  // console.log(res);
  const lyrics = await res.text();
  const json = parser.parse(lyrics);
  console.log('JSON', json.GetLyricResult.Lyric);
  return lyrics;
};


