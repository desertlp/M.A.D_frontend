const url = `http://localhost:4000/api/v1/user`
const token = localStorage.getItem('token');

class UserModel {
  static getAllUsers = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getUserById = (userId) => { // this is for the feautured videos (2) only 
    return fetch(`${url}/${userId}`)
      .then((response) => response.json())
  }

  static createUser = (user) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
  }


  // static createVideo = (userId, video) => {
  //   const url = `${url}/${userId}`;
  //   return fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': token,
  //     },
  //     body: JSON.stringify(video)
  //   })
  //     .then((response) => response.json())
  // }
  
  static editUser = (userId) => {
    return fetch(`${url}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(userId)
    })
      .then((response) => response.json())
  }
  
  
}



export default UserModel;
