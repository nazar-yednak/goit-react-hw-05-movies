import { getCastMovie } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let imageURL = 'https://image.tmdb.org/t/p/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const searchMovie = () => {
      try {
        getCastMovie(movieId).then(setCast);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ cast_id, name, character, profile_path }) => {
          return (
            <div>
              <li key={cast_id}>
                {profile_path !== null ? (
                  <img
                    src={`${imageURL}w342${profile_path}`}
                    alt={name}
                    loading="lazy"
                  />
                ) : (
                  <img height="300" alt={name} loading="lazy" />
                )}
                <p>{name}</p>
                <p>{character}</p>
              </li>
            </div>
          );
        })}
    </ul>
  );
};
export default Cast;
