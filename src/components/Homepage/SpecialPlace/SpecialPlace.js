import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";
import Particles from "react-tsparticles";
const SpecialPlace = () => {
    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
      <div className="special-place">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12}>
              <h4>WELCOME TO, TOUR WORLD</h4>
              <h1>Nature's Majesty Awaits You</h1>
              <p>
                “Travel is fatal to prejudice, bigotry, and narrow-mindedness,
                and many of our people need it sorely on these accounts. Broad,
                wholesome, charitable views of men and things cannot be acquired
                by vegetating in one little corner of the earth all one’s
                lifetime.” – Mark Twain
              </p>
              <button className="button-style">learn more...</button>
            </Col>
            <Col md={6} xs={12}>
              <img
                className="img-fluid"
                src="https://i.ibb.co/30c7ThC/lake-nature-beautiful-places-world-wallpaper-preview.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SpecialPlace;
