import React from "react";
import img1 from './images/abc.png';
import img2 from './images/a1.png';
import img3 from './images/a2.png';
import img4 from './images/Frame5.png';
import Header from "./Header";
import './styles.css';

function LandingPage() {

  return (
    <div>
      <Header />
      <div>
        <a href="login"><img src={img1} alt="Image 1" className="image-containerx" /></a>
      </div>
      <div className="containerx">
        <div className="image-containerx">
          <a><img src={img2} alt="Image 2" /></a>
        </div>
        <div className="image-containerx">
          <a><img src={img3} alt="Image 3" /></a>
        </div>
      </div>
      <div>
        <a><img src={img4} alt="Image 4" className="image-containerx" /></a>
      </div>



    </div>
  );
}

export default LandingPage;
