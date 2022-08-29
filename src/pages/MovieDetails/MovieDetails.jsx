import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getIdMovie } from '../../API/API';
const MovieDetalis = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const { from } = location.state;
  const navigate = useNavigate();
  const goBack = () => navigate(location.state.from);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getIdMovie(movieId);

        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <button type="button" onClick={goBack}>
            back
          </button>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p> {movie.genres.map(({ name }) => name).join(' ')}</p>
          <hr></hr>

          <NavLink state={{ from }} to={`cast`}>
            Cast
          </NavLink>
          <br></br>
          <NavLink state={{ from }} to={`reviews`}>
            Reviews
          </NavLink>
          <Outlet />
        </div>
      )}
    </>
  );
};
export default MovieDetalis;
