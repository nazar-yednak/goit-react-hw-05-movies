import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Menu from './components/Menu/Menu';
import MovieDetalis from './pages/MovieDetails/MovieDetails';
import Cast from './pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
