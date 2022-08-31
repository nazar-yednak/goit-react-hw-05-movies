import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const GalleryContainer = styled.div`
  display: grid;
  justify-content: center;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px; ;
`;
export const LinkMovie = styled(Link)`
  color: black;
  font-style: normal;
  font-weight: 500;
  list-style: none;
  text-decoration: none;
`;
export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
