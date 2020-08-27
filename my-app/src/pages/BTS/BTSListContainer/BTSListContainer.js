import React from 'react';
import BTSList from '../../../components/BTSList/BTSList';
import UserModel from '../../../models/user';

class BTSListContainer extends React.Component {
  state = {
    bts: [],
  };

  componentDidMount() {
    // Get All BTS Photos
    const userId = localStorage.getItem('id');
    UserModel.getUserById(userId)
      .then((result) => {
        console.log(result);
        this.setState({ bts: result.bts });
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <BTSList bts={this.state.bts} />;
  }
}

export default BTSListContainer;
