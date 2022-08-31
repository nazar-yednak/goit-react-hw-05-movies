import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getIdMovie } from '../../API/API';
import {
  ButtonBack,
  Container,
  ContainerDetails,
  Title,
  GenresText,
  TitleOver,
} from './MovieDetails.styled';
const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const { from } = location.state;
  const navigate = useNavigate();
  const goBack = () => navigate(location.state.from);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const result = await getIdMovie(movieId);
        console.log(result);
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
          <ButtonBack type="button" onClick={goBack}>
            Go back
          </ButtonBack>
          <Container>
            <div>
              {movie.poster_path !== undefined ? (
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                ' '
              )}
            </div>
            <ContainerDetails>
              <Title>
                {movie.title} ({movie?.release_date?.slice(0, 4)})
              </Title>
              <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
              <TitleOver>Overview</TitleOver>
              <p>{movie.overview}</p>
              <GenresText>
                {movie?.genres?.map(({ name }) => name).join(' ')}
              </GenresText>
            </ContainerDetails>
          </Container>
          <hr></hr>
          <p>Additional information</p>
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
export default MovieDetails;
