import axios from "axios";
import React, {useEffect, useState} from "react"
const path = "https://image.tmdb.org/t/p/original"
function Header(){
    
    
    const [val, setVal] = useState("");
    const[movie,setmovie] = useState([])

    // const [inputVal, setInputVal] = useState("")
   console.log(val)
   function getdata(){

      axios.get("https://api.themoviedb.org/3/search/movie?api_key=2e80297decc2bf87170c8aa71e4fb8ed&language=en-US&query= "+val+ " &page=1&include_adult=false")
      .then((Response)=>{
        console.log(Response.data.results)
        setmovie(Response.data.results)
    })

      setVal('')
   }

   






    return(
        <>
        <div className="search">
            
            <input value={val} onChange={e => setVal(e.target.value)} />
            <button  type="submit" onClick={getdata}>
                search
            </button>
            <div className="movies">
            
            {
                   movie ?
                   movie.map((movie) =>
                   
                       
                       <div className='movie-box' >
                    
                           <img src={path + movie.backdrop_path} alt='Img'></img>
                        
                       </div>
                   ): ''}
            </div>
        </div>
        </>
    )

}
export default Header