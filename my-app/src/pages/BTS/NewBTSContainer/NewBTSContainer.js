import React from 'react';
import { withRouter } from 'react-router-dom';
import BTSModel from '../../../models/bts';

class NewBTSContainer extends React.Component {
  state = {
    description: '',
    photoUrl: '',
  };

  handleChage = (event) => {
    // console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    BTSModel.createBTS(this.state)
      .then((result) => {
        console.log(result);
      });
      // Redirect To BTS Index (history comes from react-router-dom)
    this.props.history.push('/bts');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <h2>Add A New BTS Photo</h2>

          <div>
            <label htmlFor="">Photo Url</label>
            <input onInput={this.handleChage} type="text" name="photoUrl" />
          </div>

          <div>
            <label htmlFor="">Description</label>
            <input onInput={this.handleChage} type="text" name="description" />
          
          </div>

          <button type="submit">Add Photo</button>

        </form>
      </div>
    );
  }
}

export default withRouter(NewBTSContainer);
