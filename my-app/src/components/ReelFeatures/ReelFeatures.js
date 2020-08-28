import React from 'react';
import Video from '../Video/Video';

import './ReelFeatures.css';



function ReelFeatures(props) {
  return (
      <div className="features-cards-wrapper">
        <div className="features-card">
          <section className="content-wrapper">
          </section>
        </div>
      </div>
  );
}

export default ReelFeatures;



// function ReelFeatures(props) {

//   const featuredVideos = props.featuredVideos.map((videoObj) => {
//     return <Video key={videoObj._id} video={videoObj} list={true} />
//   });
//   return (
//       <div className="features-cards-wrapper">
//         <h4>Featured Videos</h4>
//         <div className="features-card">
//           <section className="content-wrapper">
//             {featuredVideos}
//           </section>
//         </div>
        
//       </div>
//   );
// }

// export default ReelFeatures;