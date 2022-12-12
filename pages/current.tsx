import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getHMSfromMs } from '../components/funcs.js';
import styles from '../styles/current.module.scss'

const Current = () => {
  // @ts-ignore -- I can't deal with this shit
  const [data, setData] = useState<any>({})

  useEffect(() => {
    (function foo() {
      axios.get("/api/current").then((response) => {
        console.log(response.data.item);
        setData(response.data);
      }, (err) => {
        console.log(err)
      });

      setTimeout(foo, 10000000)
    })()
  }, [])

  console.log(+data.progress_ms)
  
  return (
    <div className={styles.container} style={{display: "flex", flexDirection: "column"}}>
      <img style={{height: "320px", width: "320px"}} src={data.item && data.item.album.images[0].url} alt="" />
      <b style={{fontSize: "2rem"}}>{data.item && data.item.name}</b>
      <i style={{fontSize: "1.5rem"}}>{data.item && data.item.artists.map(n => n.name + ", ")}</i>
      <b style={{fontSize: "1rem"}}>{data.item && data.item.album.name}</b>
      <span>{data.item && getHMSfromMs(+data.progress_ms)} / {data.item && getHMSfromMs(+data.item.duration_ms)} </span>
    </div>
  )
}

export default Current;