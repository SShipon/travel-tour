import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
      <div className="banner-img">
        <div className="banner-text">
          <h2 className="type-content">
            <Typewriter
              options={{
                strings: [
                  "Hello I am Shipon ",
                  "Mern Stack Developer",
                  "Web Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            A journy of a 1000 miles start with a single steps.One’s destination
            is never a place, but a new way of seeing things.
          </p>
        </div>
      </div>
    );
};

export default Banner;
