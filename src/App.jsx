import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
// import Home from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';

// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import Cast from './pages/Cast/Cast';
// import Reviews from 'pages/Reviews/Reviews';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
