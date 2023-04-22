import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constant'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  const [idx, setIdx] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results[0]);
      setMovies(response.data.results)
    }).catch((err)=>{
      // alert('error')
    })
  }, [])
  
  function onReady(event) {
    event.target.setPlaybackQuality('hd1080');
    // event.target.playVideo();
  }

  const opts = {
    height: '152',
    width: '250',
    playerVars: {
      controls:0,
      autoplay: 1,
      showinfo:0,
      modestbranding: 1,
    }
  }
  const opts1 = {
    height: '252',
    width: '450',
    playerVars: {
      controls:0,
      autoplay: 1,
      showinfo:0,
      modestbranding: 1,
    }
  }
  const handleMovie = (id,i)=>{
    setIdx(i);
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0].key)
        console.log(urlId);
      } else {
        setUrlId('')
        console.log('no video');
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie,i)=>{
            return(
              <div>
                {(idx===i && urlId) ? <Youtube className={props.isSmall?'small-poster':'poster'} videoId={urlId} 
                opts={props.isSmall ? opts : opts1} onReady={onReady}/>:  
              <img onClick={()=>{
                handleMovie(movie.id,i)
              }} className={props.isSmall?'small-poster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
            }
              </div>
            )
          })}
        </div>
        
        
    </div>
  )
}

export default Rowpost