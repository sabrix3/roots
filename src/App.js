import './App.css';
import {useState} from 'react';
import {movieData} from "./Data";
import { MovieList } from './Components/MovieList';
import { Filter } from './Components/Filter';
import Add from './Components/Add';
import { Trailer } from './Components/Trailer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





function App() {
  
  return (
    <Router>
    <div className="App">
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/trailer/:id" component={Trailer}/>
     </Switch>
     
    </div>
    </Router>
    
  );
}

function Home () { 
  const [movies, setMovies] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0)
  return (
  
  <div className="App">
    <Filter setSearchRating={setSearchRating} setSearchTitle={setSearchTitle} searchRating={setSearchRating} />
    <MovieList searchTitle={searchTitle} movies={movies} searchRating={searchRating} />
     <Add setMovies={setMovies} movies={movies}/>

    

  </div>
  );
}



export default App;
