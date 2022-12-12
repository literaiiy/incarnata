import spotifyAPI from "./spotifyAPI";

export default async function currentAPI(req, res) {
  let spotify = spotifyAPI(req);
  
  await spotify.getMyCurrentPlaybackState().then((data) => {
    console.log(data)
    res.status(200).json(data.body);
  }, () => {
    res.status(401).json("Invalid token");
  });
}