import React from 'react';
import { useWindowSize } from '../CustomHooks/useWindowSize';
const Video = props => {
  const size = useWindowSize();
  console.log(size);
  return (
    <div>
      <iframe
        style={{ textAlign: 'center' }}
        title='Video'
        width='100%'
        height={`${size.height - 200}`}
        src={`https://www.youtube.com/embed/${props.match.params.id}`}
        frameBorder='0'
        allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default Video;
