import React from 'react';
import InstagramFeed from './InstagramFeed';

const Gallery = () => {
  return (
    <InstagramFeed username='jkyle_carpentry' limit={12} />
  );
}

export default Gallery;
