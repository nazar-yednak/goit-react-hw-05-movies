import { getRevievMovie } from 'API/API';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const searchMovie = () => {
      try {
        getRevievMovie(movieId).then(setReviews);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
