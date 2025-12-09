import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__bg flex-center section__padding relative' id='about'>
    <div className='flex-center absolute inset-0'>
        <h1 className='font-base text-gray text-[700px] z-0 max-[650px]:text-[500px]'>E</h1>
    </div>

    <div className='flex-center z-2 w-full max-[900px]:flex-col'>
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img rotate-180" />
        <p className="p__opensans my-4 mx-0 text-gray-400" >
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

       <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans my-4 mx-0 text-gray-400">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
       </div>
    </div>
  </div>
);

export default AboutUs;
