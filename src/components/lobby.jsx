import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import myImage from "../alma.jpg";
import styled from "styled-components";

const Controls = styled.div`
  .navBar {
    position: absolute;
    bottom: 0;
    background-color: #000000;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      background-color: transparent;
      border: 2px solid white;
      color: white;
      padding: 10px;
      margin: 20px;
      width: 150px;
      transition: all 0.3s ease-in-out;
      outline: none;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;

const Faq = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  height: 60vh;
  background-color: black;
  color: white;
  overflow: scroll;
`;

export let Lobby = (props) => {
  const [isShowFaqTrue, setShowFaqTrue] = useState(false);

  return (
    <div>
      <Pannellum
        width="100%"
        height="100vh"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
          URL="https://github.com/farminf/pannellum-react"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={31}
          yaw={-107}
          text="Info Hotspot Text 4"
          URL="https://github.com/farminf/pannellum-react"
        />
      </Pannellum>

      <Controls faqClicked={isShowFaqTrue}>
        <div className="navBar">
          <button>Main Program</button>
          <button>Journey Tracker</button>
          <button onClick={() => setShowFaqTrue(!isShowFaqTrue)}> FAQ</button>
        </div>
      </Controls>

      {isShowFaqTrue ? (
        <Faq>
          <h1>Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            est lorem, dignissim sit amet lacinia vitae, suscipit sit amet
            ipsum. Ut egestas varius ligula ac fringilla. Mauris eu neque vitae
            erat aliquam maximus. Mauris cursus, est eget tempor sollicitudin,
            dolor quam tincidunt eros, at finibus libero justo eget sem.
            Suspendisse diam augue, laoreet lacinia lorem sed, iaculis
            consectetur libero. Maecenas eu nulla porttitor, ultrices nisl id,
            interdum ante. Mauris augue lacus, molestie sit amet mattis non,
            pellentesque vel est. Donec pretium libero sed congue eleifend. Sed
            non lacinia libero. Proin porta nisi at orci elementum, in egestas
            nunc faucibus. Praesent rhoncus orci massa, sit amet ullamcorper
            odio molestie id. Mauris euismod placerat ultricies. Sed dapibus
            accumsan eros in sollicitudin. Sed quis accumsan urna. Nullam tempus
            nulla vitae ligula auctor, ac pulvinar elit mattis.
          </p>

          <p>
            Cras placerat nisl vel justo dapibus, quis tempus diam placerat.
            Mauris est turpis, auctor et est eu, mollis consectetur ligula.
            Fusce pharetra varius elit non commodo. In finibus vulputate elit id
            scelerisque. Vestibulum dui mauris, rhoncus sit amet vestibulum et,
            porta id mauris. Duis tempor enim sit amet nisi blandit, sit amet
            porta neque porta. Sed sit amet laoreet mauris.
          </p>
          <p>
            Cras placerat nisl vel justo dapibus, quis tempus diam placerat.
            Mauris est turpis, auctor et est eu, mollis consectetur ligula.
            Fusce pharetra varius elit non commodo. In finibus vulputate elit id
            scelerisque. Vestibulum dui mauris, rhoncus sit amet vestibulum et,
            porta id mauris. Duis tempor enim sit amet nisi blandit, sit amet
            porta neque porta. Sed sit amet laoreet mauris.
          </p>
        </Faq>
      ) : (
        <div></div>
      )}
    </div>
  );
};
