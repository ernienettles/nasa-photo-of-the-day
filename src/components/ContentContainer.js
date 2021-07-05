import React, { useState, useEffect } from "react";
import Content from "./Content";
import axios from "axios";



export default function GetContent() {

    const [info, setInfo] = useState({});
  
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=HHybDewVjQhl3Q9B1iPGIE8WNXZFetasCfMT8zy9`)
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.log(`The data was not returned`, error);
      })
    }, []);
    return (
      <div className='content-container'>
        <Content date={info.date} explanation={info.explanation} image={info.hdurl} title={info.title}/>
      </div>
    )
    }