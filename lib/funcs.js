/**\
 * Returns a string in the format of HH:MM:SS from a number of milliseconds
 * @param ms - number of milliseconds
 * @returns string in the format of HH:MM:SS
 */
export const getHMSfromMs = (ms) => {
  return new Date(ms).toISOString().slice(11, 19);
}

export const separateArtistNames = (artists) => {
  let artistNames = [];

  if (artists.length === 1) {
    return artists[0].name;
  }

  artists.forEach((artist) => {
    artistNames.push(artist.name);
  });

  const str = artistNames.join(", ");
  const lastComma = str.lastIndexOf(",");
  return str.slice(0, lastComma) + " & " + str.slice(lastComma + 1);
}