/**\
 * Returns a string in the format of HH:MM:SS from a number of milliseconds
 * @param ms - number of milliseconds
 * @returns string in the format of HH:MM:SS
 */
export const getHMSfromMs = (ms) => {
  return new Date(ms).toISOString().slice(11, 19);
}