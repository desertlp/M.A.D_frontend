import React from 'react';
import './BTSIndex.css';
import BTSListContainer from './BTSListContainer/BTSListContainer';

// Material-UI Components 
import NewBTSButton from '../../components/MatUI/NewBTSButton';

const BTSIndex = () => {
  return (
    <div>
        <div className="video-index-cards-wrapper">
            <div className="video-index-card">
                <BTSListContainer/>
            </div>
            <NewBTSButton/>
        </div>
    </div>
  );
}

export default BTSIndex;
