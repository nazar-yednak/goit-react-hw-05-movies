import styled from 'styled-components';

export const ButtonBack = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;

  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background-color: #303f9f;
  }
`;
export const Container = styled.div`
  display: flex;
`;
export const ContainerDetails = styled.div`
  margin-left: 15px;
  background-color: #f6eeee66;
`;
export const Title = styled.h2`
  color: black;
  font-style: normal;
  font-weight: 700;
`;
export const GenresText = styled.p`
  color: black;
  font-style: normal;
  font-weight: 700;
`;
export const TitleOver = styled.h3`
  color: black;
  font-style: normal;
  font-weight: 500;
`;
