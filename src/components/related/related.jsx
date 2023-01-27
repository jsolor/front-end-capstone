import React from 'react';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import './related-items-comparison.scss';

export default function Related() {
  return (
    <div className="related-n-outfits">
      <RelatedCarousel />
      <br />
      <hr />
      <br />
      <OutfitCarousel />
    </div>
  );
}

// export default Related;
