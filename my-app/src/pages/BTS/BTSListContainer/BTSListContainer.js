import React from 'react';
import BTSList from '../../../components/BTSList/BTSList';
import BTSModel from '../../../models/bts';

class BTSListContainer extends React.Component {
  state = {
    bts: [],
  };

  componentDidMount() {
    // Get All BTSs
    BTSModel.getAllBTS()
      .then((result) => {
        // console.log(result);
        this.setState({bts: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <BTSList bts={this.state.bts} />;
  }
}

export default BTSListContainer;
