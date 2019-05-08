import React, { useContext } from 'react';
import { StoreContext } from '../Store/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeroVideo = () => {
  const store = useContext(StoreContext);
  const vidz = store.state.vidlist;
  return (
    <StGrid>
      {vidz.map(vid => (
        <Link
          to={`/video/${vid.id.videoId}`}
          className='card'
          style={{
            background: `url(${
              vid.snippet.thumbnails.high.url
            }) center no-repeat`
          }}
          key={vid.etag}>
          <h5>{vid.snippet.title}</h5>
        </Link>
      ))}
    </StGrid>
  );
};

export default HeroVideo;

const StGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  direction: ltr;
  .card {
    position: relative;
    text-align: center;
    height: 270px;
  }
  h5 {
    width: fill-available;

    display: block;
    position: absolute;
    bottom: 0;
    background-color: orange;
    padding: 0.5em;
    color: ${props => props.theme.white};
    margin: 0;
    text-align: center;
  }
  .hero {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;
