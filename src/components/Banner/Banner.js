import React from 'react';
import(/* webpackPrefetch: true */ './Banner.scss');

const Banner = ({src}) => {
  return (
    <img src={src} width="100%" height="auto" className="banner is-hidden-mobile" alt="banner kael website"></img>
  )
}

export default Banner;
