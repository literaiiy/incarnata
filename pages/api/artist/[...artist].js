import spotifyAPI from "../spotifyAPI";

export default async function artistAPI(req, res) {
  let spotify = spotifyAPI(req);
  const { artist } = req.query;
  
  await spotify.getArtist(artist).then((data) => {
    console.log(data)
    res.status(200).json(data.body);
  }, () => {
    res.status(401).json("Invalid token");
  });
}