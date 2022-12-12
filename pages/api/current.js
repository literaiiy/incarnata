import spotifyAPI from "./spotifyAPI";

export default async function currentAPI(req, res) {
  let spotify = spotifyAPI(req);

  // await spotify.getMyCurrentPlayingTrack().then((data) => {
  //   console.log(data)
  //   // let responseData = {
  //   //   'name': data.body.item.name,
  //   //   'artist': data.body.item.artists[0].name,
  //   //   'album': data.body.item.album.name,
  //   //   'image': data.body.item.album.images[0].url,
  //   //   'href': data.body.item.album.external_urls.spotify
  //   // };
  //   let responseData = data.body.item;
  //   res.status(200).json(responseData);
  // }, () => {
  //   res.status(401).json("Invalid token");
  // });
  await spotify.getMyCurrentPlaybackState().then((data) => {
    console.log(data)
    res.status(200).json(data.body);
  }, () => {
    res.status(401).json("Invalid token");
  });
}