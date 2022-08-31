import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 50px;
  margin-bottom: 25px;
  list-style: none;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
export default StyledLink;
