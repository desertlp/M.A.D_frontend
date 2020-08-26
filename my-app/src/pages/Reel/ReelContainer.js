import React from 'react';
import '../general.css';
import './ReelContainer.css';
// import Reel from '../../components/Reel/Reel';
// import UserModel from '../../models/user';

const ReelContainer = () => {
  return (
    <div className="general-page">
      <div className="reel-page-divide">

        <section className="reel-side">
          <div className="reel-container">
            <div className="reel-box">
              <p>Reel</p>
              {/* <Reel/> */}
            </div>
            <div className="reel-content-wrapper">
              <h3 id="ReelTitle">First Last, Company</h3>
            </div>
          </div>
        </section>

        <section className="featured-side">
          <div className="video-stack">
            <h3>FEATURED VIDEOS</h3>
            

            <div className="individual-video">
              <div className="image-wrapper">
                <img src="https://miro.medium.com/max/800/1*9ntzOHJ38vryGPyTyV-P9g.jpeg"></img>
              </div>
              <div className="feature-vids-content-wrapper">
                <h3>Video Title, Artist</h3>
              </div>
              
            </div>

            <div className="individual-video">
              <div className="image-wrapper">
                <img src="https://pmchollywoodlife.files.wordpress.com/2018/10/britney_school-gallery.jpg?w=800"></img>
              </div>
              <div className="feature-vids-content-wrapper">
                <h3>Video Title, Artist</h3>
              </div>
              
            </div>

          </div>
        </section>
        
      </div>

    </div>
  )

};

export default ReelContainer;

// ////////////////////













































/////////////////////

/* import React from 'react';
import './ReelContainer.css';
import Reel from '../../components/Reel/Reel';
import UserModel from '../../models/user';

class ReelContainer extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    // this should automatically update, not sure if it actually is 

    UserModel.getUserById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({user: result});
      })
      .catch((err) => console.log(err))
  };

  render() {
    console.log(this.props);
    return <Reel reel={this.state.user.reelUrl} list={false} />;
  }
}
export default ReelContainer; */