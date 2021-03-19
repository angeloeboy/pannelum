import React, { useEffect, useState } from "react";
import { Pannellum } from "pannellum-react";
import styled from "styled-components";
import arrow from "./up-arrow.png";
import close from "./cancel.png";
import music from "./audio.mp3";
import { CSSTransition } from "react-transition-group";
import { Faq } from "./Faq";
import { Journey } from "./Journey";

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

const Div = styled.div`
  .hotspot {
    display: none;
  }

  @keyframes animate {
    from {
      background-color: red;
      width: 40px;
      height: 40px;
    }
    to {
      background-color: green;
      width: 20px;
      height: 20px;
    }
  }

  .custom {
    height: 30px;
    width: 30px;
    border-radius: 60px;
    background: #f00;
    animation: animate 2s infinite;
    animate &:hover {
      background-color: green;
    }
  }

  .custom2 {
    height: 20px;
    width: 20px;
    border-radius: 60px;
    background: #f00;
    transition: all 1 ease;

    &:hover {
      animation: animate 1s infinite;
    }
  }

  .custom3 {
    height: 60px;
    width: 60px;
    background-image: url(${arrow});
    /* background-color: green; */
    background-size: contain;
  }

  .arrowClicked {
    position: absolute;
    padding: 20px 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    height: 60vh;
    background-color: white;
    border-radius: 10px;
    overflow-y: scroll;

    iframe {
      width: 100%;
      height: 100%;
    }

    img {
      position: fixed;
      top: 20px;
      right: 50px;
      width: 20px;
    }

    input {
      display: block;
      width: 100%;
      margin-bottom: 25px;
      margin-top: 10px;
    }

    .radio {
      display: inline-block;
      width: initial;
    }

    button {
      display: block;
      margin: 0 auto;
      color: white;
      background-color: black;
      outline: none;
      border: none;
      margin-top: 10px;
      padding: 10px 20px;
    }
  }

  .playAudio {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 600ms linear;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 600ms linear;
  }

  .fade-exit-done {
    opacity: 0;
  }

  .my-node-enter {
    opacity: 1;
    top: 45%;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: all 300ms;
    top: 50%;
  }

  .my-node-enter-done {
    transition: all 100ms;
    top: 50%;
  }

  .my-node-exit {
    opacity: 1;
    transition: all 0.2s;
    top: 45%;
  }

  .my-node-exit-active {
    opacity: 0;
  }

  .my-node-exit-done {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export let Lobby = (props) => {
  const [isShowFaqTrue, setShowFaqTrue] = useState(false);
  const [isArrowClicked, setArrowClicked] = useState(false);
  const [isArrowClicked2, setArrowClicked2] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showing, setShowing] = useState(false);
  const [isJourneyClicked, setJourneyClicked] = useState(false);

  useEffect(() => {
    playAudio();
  }, [isPlaying]);

  let playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];

    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  };

  let pauseAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Div>
      <Pannellum
        width="100%"
        height="100vh"
        image={"https://pannellum.org/images/alma.jpg"}
        pitch={10}
        yaw={180}
        autoLoad
        showControls={false}
        mouseZoom={false}
        disableKeyboardCtrl={true}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={6}
          yaw={-98}
          text="Testing Testing"
          URL="https://github.com/angeloeboy/pannelum"
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={12}
          yaw={-10}
          name="custom"
          cssClass="custom"
          handleClick={() => console.log("clicked")}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={7}
          yaw={-85}
          name="custom"
          cssClass="custom3"
          handleClick={() => setArrowClicked2(true)}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={14}
          yaw={-43}
          name="custom"
          cssClass="custom3"
          handleClick={() => setArrowClicked(true)}
        />
      </Pannellum>

      <Controls>
        <div className="navBar">
          <button onClick={() => setJourneyClicked(!isJourneyClicked)}>
            Journey Tracker
          </button>
          <button onClick={() => setShowFaqTrue(!isShowFaqTrue)}> FAQ</button>
        </div>
      </Controls>

      <CSSTransition
        in={isShowFaqTrue}
        timeout={600}
        classNames="my-node"
        unmountOnExit
      >
        <Faq close={close} setShowFaqTrue={setShowFaqTrue} />
      </CSSTransition>

      <CSSTransition
        in={isArrowClicked}
        timeout={600}
        classNames="my-node"
        unmountOnExit
      >
        <div className="arrowClicked">
          <h1> Go to that Direction? Sure! </h1>
          <form action="">
            <label> 1. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 2. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 3. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 4. Lorem ipsum dolor? </label>
            <input type="text" />

            <p>Gender</p>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Male </label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Female</label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Other </label>
          </form>
          <img src={close} alt="close" onClick={() => setArrowClicked(false)} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isArrowClicked2}
        timeout={600}
        classNames="my-node"
        unmountOnExit
      >
        <div className="arrowClicked">
          <h1> Here's a simple quiz </h1>
          <form action="">
            <label> 1. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 2. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 3. Lorem ipsum dolor? </label>
            <input type="text" />
            <label> 4. Lorem ipsum dolor? </label>
            <input type="text" />

            <p>Gender</p>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Male </label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Female</label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> Other </label>

            <p>Age</p>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> 16 - 18 </label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> 19 - 22 </label>
            <input type="radio" name="gender" id="male" className="radio" />
            <label> 22 - 25 </label>

            <button>Submit</button>
          </form>
          <img
            src={close}
            alt="close"
            onClick={() => setArrowClicked2(false)}
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isJourneyClicked}
        timeout={600}
        classNames="my-node"
        unmountOnExit
      >
        <Journey close={setJourneyClicked} />
      </CSSTransition>

      <div className="playAudio">
        <button onClick={pauseAudio}>
          {isPlaying ? "Stop Audio" : "Play Audio"}
        </button>
        <audio className="audio-element">
          <source src={music}></source>
        </audio>
      </div>
    </Div>
  );
};
