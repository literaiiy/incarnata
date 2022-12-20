import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getHMSfromMs, separateArtistNames } from '../lib/funcs.jsx';
import styles from '../styles/current.module.scss'
import Link from 'next/link';

const Current = () => {
  // @ts-ignore -- I can't deal with this shit
  const [data, setData] = useState<any>({})
  const [artistData, setArtistData] = useState<any>({})
  const [artistId, setArtistId] = useState<string>()

  useEffect(() => {
    (function foo() {

      // Get current playback data
      axios.get("/api/current").then((response) => {
        console.log(response.data.item);
        setData(response.data);
        setArtistId(response.data.item.artists[0].id)
      }, (err) => {
        console.log(err)
      });

      setTimeout(foo, 1000)
    })()
  }, [])

  useEffect(() => {
    axios.get(`/api/artist/${(artistId)}`).then((response) => {
      console.log(response.data);
      setArtistData(response.data);
    }, (err) => {
      console.log(err);
    });
  }, [artistId])

  console.log(+data.progress_ms)
  
  return data.item ? (
    <div className={styles.container}>
      
      <Link href="/logout">
        <a>
          Logout
        </a>
      </Link>
      <div className={styles.backgroundImage} style={{backgroundImage: `url(${artistData.images && artistData.images[0].url})`}}></div>
      <div className={styles.adjust}>
        <img className={styles.albumCover} src={data.item.album.images[0].url} alt="" />
        <span className={styles.trackTitle}>{data.item.name}</span>
        <span className={styles.artistName}>{separateArtistNames(data.item.artists)}</span>
        <span className={styles.albumName}>{data.item.album.name}</span>
        <span className={styles.progress}>{getHMSfromMs(+data.progress_ms)} / {getHMSfromMs(+data.item.duration_ms)} </span>
      </div>
    </div>
    )
      : 
    <Link href="/auth">
      <a>
        Sign in
      </a>
    </Link>
}

export default Current;