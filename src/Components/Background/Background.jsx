  
import React from 'react';
import './Background.scss';

function Background() {
  return (
    <div className="Background">
      <div className="background-rom-and-moon"></div>
      <div className="top-gradiated-background-layer"></div>
      <div className="background-rom-cutout"></div>
      <div className="middle-gradiated-background-layer"></div>
      <div className="background-upsidedown-rom-cutout"></div>
      <div className="bottom-gradiated-background-layer"></div>
    </div>
  );
}

export default Background;