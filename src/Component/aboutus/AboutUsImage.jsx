import React from "react";
import aboutUsImage from "../../assets/AboutUsPhoto.jpg";
const AboutUsImage = () => {
  return (
    <div>
      <div className="AboutUsImage">
        <img src={aboutUsImage} width={400} height={500} />
      </div>
    </div>
  );
};

export default AboutUsImage;
