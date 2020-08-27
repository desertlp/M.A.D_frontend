const url = `http://localhost:4000/api/v1/bts`
const token = localStorage.getItem('token');

class BTSModel {
  static getAllBTS = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getBTSById = (btsId) => { // this is for bts preview mode? bonus**
    return fetch(`${url}/${btsId}`)
      .then((response) => response.json())
  }

  static createBTS = (bts) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(bts)
    })
      .then((response) => response.json())
  }
}



export default BTSModel;
