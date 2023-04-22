import React, { useState } from 'react'
import { useEffect } from "react";
import './Banner.css'
import axios from '../../axios';
import {API_KEY,imageUrl} from '../../Constants/constant'

function Banner() {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      let rand = Math.floor(Math.random() * 19) + 1
      if (rand===19 || rand===12 || rand===7) {
        rand=15;
      }
        setMovie(response.data.results[rand])
    })
  }, [])
  
  return (
    <div>
    <div className='banner' style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
        <div className="content">
            <h1 className='title'>{movie.title && movie.title.length<26 ? movie.title : 'No Title'}</h1>
            <div className='description'>{movie.overview && movie.overview.length<300 ? movie.overview : ''}</div>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
    <div className='banner1' style={{backgroundImage:`url(${imageUrl+movie.poster_path})`}}>
        <div className="content">
            <h1 className='title'>{movie.title && movie.title.length<24 ? movie.title : 'No Title'}</h1>
            <div className='description'>{movie.overview && movie.overview.length<300 ? movie.overview : ''}</div>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
    </div>
  )
}

export default Banner