import React from 'react';
import BTS from '../BTS/BTS';

import './BTSList.css';

function BTSList(props) {
  const btsList = props.bts.map((btsObj) => {
    return <BTS key={btsObj._id} photo={btsObj} list={true} />
  });

  return (
    <div className="bts-container">
      {btsList}
    </div>
  );
}

export default BTSList;
