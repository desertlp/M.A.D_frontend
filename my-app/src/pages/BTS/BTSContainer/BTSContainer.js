import React from 'react';
import BTS from '../../../components/BTS/BTS';
import BTSModel from '../../../models/bts';

class BTSContainer extends React.Component {
  state = {
    bts: {},
  };

  componentDidMount() {
    // Get All BTS Photos
    BTSModel.getBTSById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({bts: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.props);
    return <BTS bts={this.state.bts} list={false} />;
  }
}

export default BTSContainer;
