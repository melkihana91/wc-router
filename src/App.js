
import './App.css';
import {useState , useEffect} from 'react' ;
import Navba from './Components/Navba/Navba';
import MovieList from './Components/MovieList/MovieList';
import { v4 as uuidv4 } from 'uuid';
import { stars, inputSearch, setInputSearch , setStars, filtredMovies, setFiltredMovies }  from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {


 const[ movies, setMovies ] = useState([
{ 
  id: uuidv4( ) ,
  trailer:"https://www.cineserie.com/series/1355606/video/4023931/?jwsource=cl",

  img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Gd7WnUp8OAQceFP8G06HcI5J-etNq9WiTmmkVgjnJg_lNihu0uMaFjLUOqz0xubmvb0&usqp=CAU", 

discription : "Here are the adventures of Laura, a young schoolgirl who encounters many worries, and her hamster Hamtaro, who also experiences problems with his small community of Hamsters: the Ham-Hams club. During each episode, Hamtaro and Laura will face the same difficulties but on the scale of their respective worlds. But as they will always find solutions to remedy it thanks to their friendship, each will inspire the other in their everyday life.",
titel : "Hamtaro - P'tits hamsters, grandes aventures" ,
rating : 3 ,
 
},
{
  id: uuidv4( ) ,
  trailer:"https://youtu.be/GWULfrhy1Yk",
  img: "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzEwXFxcLzI0MTQyOTE3XFxcL2RvcmEtdGhlLWV4cGxvcmVyLW9uY2UtdXBvbi1hLXRpbWUtdmlkZW8tYXBwXzU5NzkzLTk2OTE0XzEuanBlZ1wiLFwid2lkdGhcIjo2NDcsXCJoZWlnaHRcIjozNDAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5oZXIuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9oZXJcXFwvbm8taW1hZ2UucG5nP2lkPWI2Zjg0ZDYyN2I0MTE0ZjAwZjUwXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjEwNzA3ZDhhMjgxMDA3OTg4Mjc0ZDZkMmU2MGQ2OTUzZDQ5NzJiYzYifQ==/dora-the-explorer-once-upon-a-time-video-app-59793-96914-1.jpeg",
  discription : " Dora's birthday and you know what that means ... a fun-filled party with all her friends. The only problem is Dora and Boots are stuck in storybook land and must go on an exciting, magical journey if they hope to make it to the party on time",
  titel : "Dora's Big Birthday Adventure FULL GAME Longplay ", 
  rating : 5,
},
{id: uuidv4( ) ,
  trailer:"https://www.microsoft.com/en-us/p/the-swan-princess-a-royal-wedding/8d6kgwxn6t4m?activetab=pivot%3aoverviewtab",
  img:"https://www.filmsdeprincesse.net/wp-content/uploads/2022/03/mJaNBADFKRiMys8DiGemrLGYd9U-200x300.jpg",
  discription : "Princess Odette and Prince Derek go to the wedding of Princess Mei Li and Chen. Upon her arrival, Odette discovers that the witch Fang has cast a spell in order to steal Chen from Mei Li. With the wedding fast approaching, the princess, supported by Prince Li and his friends, will do everything to break the spell",
  titel : "The Swan and the Princess: A Royal Wedding",
  rating : 7,


},
{
  id: uuidv4( ) ,
  trailer:"https://youtu.be/jIH9MGwTYz8",
img : "https://i.pinimg.com/originals/97/eb/82/97eb8251ebb4d85ea3b8f0c92cea14d5.jpg",
discription: "The adventures of young Rémi, an orphan taken in by the sweet Madame Barberin. At the age of 10, he was torn from his adoptive mother and entrusted to Signor Vitalis, a mysterious traveling musician. At his side, he will learn the harsh life of a mountebank and to sing to earn his bread. Accompanied by the faithful dog Capi and the little monkey Joli-Coeur, his long journey through France, made of encounters, friendships and mutual aid, leads him to the secret of his origins", 
titel : "REMI WITHOUT FAMILY",
rating : 4 ,
},
{
  id: uuidv4( ) ,
  trailer:"https://youtu.be/4fksUXIdtoY",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7jEbDcKD3LcOtQmRW_SwowE-Lfgp1gaxCA&usqp=CAU", 
  discription : "Cinderella is a young woman with medium-length strawberry-blonde hair, blue eyes, and fair complexion. After her father dies, she is forced into servitude in her own home and is tormented by her evil stepmother, Lady Tremaine, and two stepsisters, Anastasia and Drizella.",
  titel : "Cinderella",
  rating : 7 ,
},

]);
const[ filtredMovies, setFiltredMovie]= useState(movies)
const[inputSearch, setInputSearch] = useState("");
const[stars, setStars] = useState(1) ;
useEffect(() => {
 setFiltredMovie(
  movies.filter((movie)=>{
return movie.titel.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())  && movie.rating >= stars
  }
 ))
 
}, [stars, inputSearch, movies] )



return (
    <div className="App">
   < Navba  movies={movies} setMovies ={setMovies} inputSearch={inputSearch}  setInputSearch={setInputSearch}  stars={stars} setStars={setStars}        />
   
   <Routes>

   
   <Route path="/"    element= { <MovieList movies={filtredMovies} /> }  /> 
<Route  path= "/movie/:id"   element={< MovieDetails movies={movies}    /> }                />
</Routes>
      
    </div> 
  );
}


export default App;
