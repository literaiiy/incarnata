import { infer } from 'gender-inference'

/**\
 * Returns a string in the format of HH:MM:SS from a number of milliseconds
 * @param ms - number of milliseconds
 * @returns string in the format of HH:MM:SS
 */
export const getHMSfromMs = (ms: number) => {
  return new Date(ms).toISOString().slice(11, 19);
}

export const separateArtistNames = (artists: Array<any>): JSX.Element => {
  let artistNames = [];
  let index = 0;
  const multiArtistStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    lineHeight: "2.5rem",
    alignItems: "center",
  };

  // If only one artist
  if (artists.length === 1) {
    return (
      <span style={getArtistFont(artists[0].name, 0)}>
        {artists[0].name}
      </span>
    )
  }

  // If more than one artist
  artists.forEach((artist) => {
    artistNames.push(
      <span style={getArtistFont(artist.name, index) }>
        {artist.name}
      </span>
    );
    index++;
  });

  const str = artistNames.join(", ");
  const lastComma = str.lastIndexOf(",");

  return (
    <span style={multiArtistStyle}>
      {artistNames}
    </span>
  )

  // return (<span>
  //     {
  //       str.slice(0, lastComma) +
  //       " & " +
  //       str.slice(lastComma + 1)
  //     }
  //   </span>
  // )
}

/**
 * 
 * @param artist artist name
 * @returns React CSS styles 
 */
export const getArtistFont = (artist: string, index: number): React.CSSProperties => {
  // return {fontSize: artist.length > 20 ? "1.5rem" : "2rem"};
  const { gender, score } = infer(artist);
  return {
    fontFamily: gender === "male" ? "Yozakura" : "Reey",
    color: index > 0 ? "lightgray" : "white"
  };
}