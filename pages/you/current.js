import { useEffect, useState } from 'react';
import axios from 'axios';

// const getInfo = () => {
//   (
//     axios.get("/api/you/current").then((response) => {
//       console.log(response.data);
//       setData(response.data);
//     }, (err) => {
//       console.log(err)
//     });
//   )
// }

const Current = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    (function foo() {
      axios.get("/api/you/current").then((response) => {
        console.log(response.data);
        setData(response.data);
      }, (err) => {
        console.log(err)
      });

      setTimeout(foo, 1000)
    })()
  }, [])
  
  return <div style={{display: "flex", flexDirection: "column"}}>
    <img style={{height: "320px", width: "320px"}} src={data.album && data.album.images[0].url} alt="" />
    <b style={{fontSize: "2rem"}}>{data.name}</b>
    <i style={{fontSize: "1.5rem"}}>{data.artists && data.artists[0].name}</i>
    <b style={{fontSize: "1rem"}}>{data.album && data.album.name}</b>
    
  </div>
}

export default Current;