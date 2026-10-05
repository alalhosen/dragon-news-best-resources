import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div>
           <h2>Q-Zone</h2> 
           <div>
            <img src={swimmingImage} alt="" />
            <img src={classImage} alt="" />
            <img src={playImage} alt="" />
           </div>
        </div>
    );
};

export default Qzone;