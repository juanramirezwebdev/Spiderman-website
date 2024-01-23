import { FileRoute } from '@tanstack/react-router';
import movies from '../data/moviesData';

export const Route = new FileRoute('/movies').createRoute({
  component: MoviesComponent,
});

function MoviesComponent() {
  return (
    <div className="card-container d-flex flex-wrap justify-content-center">
      {movies.map((movie, index) => (
        <div key={index} className="card m-2" style={{ width: '18rem' }}>
          <img src={movie.imageUrl} className="card-img-top" alt="movie poster" />
          <div className="card-body text-center">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <a href={movie.movielink} className="btn btn-primary">
              Watch me
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesComponent;


