import Axios from "axios";

const url = `http://localhost:4000/api/v1/video`
const token = localStorage.getItem('token');

class VideoModel {
  static getAllVideos = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static getVideoById = (videoId) => { // this is for the feautured videos (2) only 
    return fetch(`${url}/${videoId}`)
      .then((response) => response.json())
  }
  static createVideo = (video) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(video)
    })
      .then((response) => response.json())
  }

  // static editVideo = (videoId, video) => { // this is for the feautured videos (2) only 
  //   // const url = `${url}/${videoId}`; 
  //   return fetch(`${url}/${videoId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify(video)
  //   })
  //     .then((response) => response.json())
  // }

  static editVideo = (video, videoId) => { // this is for the feautured videos (2) only 
    return Axios.put(`${url}/${videoId}/edit`, video, {})
  }

  static deleteVideo = (videoId) => { // this is for the feautured videos (2) only 
    // const url = `${url}/${videoId}`; 
    return fetch(`${url}/${videoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(videoId)
    })
      .then((response) => response.json())
  }

}


export default VideoModel;
