import parser from 'fast-xml-parser';
export const fetchLyrics = async (artist, title) => {
  const res = await fetch(`https://afternoon-taiga-46076.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`);
  
  const lyrics = await res.text();
  const json = parser.parse(lyrics);
  
  return json.GetLyricResult.Lyric;
};


