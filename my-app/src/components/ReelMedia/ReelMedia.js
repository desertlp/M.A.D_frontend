import React from 'react';
import { Player } from 'video-react';
import './ReelMedia.css';

function ReelMedia() {
    return (
      <div className="reel-padding">
        <Player 
          config={{ file: { 
            attributes: 
              { controlsList: 'nodownload' } } }}
          playsInline 
          poster="/assets/poster.png" 
          src={require('./Reel.mov')}>
        </Player>
      </div>
      );
  }
  
export default ReelMedia;