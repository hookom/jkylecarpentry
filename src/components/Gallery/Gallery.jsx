import React from 'react';
import ScrapeIGFeed from './ScrapeIGFeed';

const Gallery = () => {
  return (<ScrapeIGFeed username='jkyle_carpentry' limit={12} />);
}

export default Gallery;
