import React, {useState,useEffect,Fragment} from 'react';
import axios from 'axios'
import Form from './component/Form'
import Song from './component/Song'
import Info from './component/Info'
function App() {

const [artist, setArtist]=useState('')
const [letter, setLetter]=useState([])
const [info, setInfo]=useState({})
 
const searchAPILetter = async search=>{
   const url = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`
   const result= await axios(url)
   setLetter(result.data.lyrics)
   setArtist(search.artist)
}
useEffect(() => {
  const searchAPIInfo = async () =>{
   if(artist){
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    const result= await axios(url)
    if(result.data!==undefined){
      setInfo(result.data.artists[0])
    }
   }
  }
  searchAPIInfo()
}, [artist]);


  return (
    <Fragment>
        <Form searchAPILetter={searchAPILetter}/>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
            <Info info={info}/>
            </div>
            <div className="col-md-6">
              <Song letter={letter}/>
            </div>
          </div>
        </div>
    </Fragment>
  
  );
}

export default App;
