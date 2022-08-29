import StyledLink from './StyledMenu.styled';
const Menu = () => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
export default Menu;
