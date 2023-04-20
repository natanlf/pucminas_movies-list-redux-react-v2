import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";
import Movie from '../components/Movie';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getMovies().then(({data}) => {
      setMovies(data.results);
    });
  },[])

  return (
    <div className="container">
      <div className="row gy-5">
        { movies.map(movie => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        )) }
      </div>
    </div>
  );
}

export default App;
