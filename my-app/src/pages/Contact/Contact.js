import React from 'react';
import './Contact.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
// Material-UI Components 

const Contact = () => {
  return (
    <div>

      <img 
        // src="https://www.adorama.com/alc/wp-content/uploads/2017/10/A-studio-with-music-video-equipment.jpg"
        // src="https://images.squarespace-cdn.com/content/v1/577ea44d440243df7dfeed76/1474841285083-OF7HS3DYB1Z6SZ0SPQOO/ke17ZwdGBToddI8pDm48kAmzVESnndSkFo4VjUYj3iZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UetZcyBSe8EzOZ6neXOxaly-CFnPMrhhheFAmjlN4d47pJmyJuPnROfkv0UjH_ecUA/image-asset.jpeg"
        // src="https://images.squarespace-cdn.com/content/v1/573b9762d51cd467e42e3de8/1544501673659-DZKRTNV53MHBJE3DOSFI/ke17ZwdGBToddI8pDm48kLXMM7vgPZ8okL8TCKCPeIcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKccmSFRteMUC57YqC6dWzzREzdwcMzWcQabLxNvMi2G9o6LtcndZQMHCa0pUWFLUVp/IMG_5018.JPG"
        src="https://roceteer.com/blog/wp-content/uploads/2016/08/music-business.jpg"
        width="100%"
        height="600px"
     
      />

      <div className="float">

        {/* <h1 className="home-h1">Major Art Departments</h1> */}
        <ContactInfo/>
      </div>

    </div>
  );
}

export default Contact;
