import { useState } from 'react';
import PropTypes from 'prop-types';
const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    onSubmit({ ...state });
    e.preventDefault();
    setState({ search: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={state.search}
        onChange={handleChange}
        placeholder="movie"
      />
      <button type="submit">search</button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
