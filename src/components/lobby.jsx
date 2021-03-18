import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import styled from "styled-components";
import arrow from "./up-arrow.png";
import close from "./cancel.png";

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
  padding: 20px 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  height: 60vh;
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;

  img {
    position: fixed;
    top: 40px;
    right: 50px;
    width: 20px;
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
  }
`;

export let Lobby = (props) => {
  const [isShowFaqTrue, setShowFaqTrue] = useState(false);
  const [isArrowClicked, setArrowClicked] = useState(false);

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
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
          URL="https://github.com/farminf/pannellum-react"
        />

        <Pannellum.Hotspot
          type="info"
          pitch={6}
          yaw={-98}
          text="Testing Testing"
          URL="https://github.com/farminf/pannellum-react"
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
          cssClass="custom2"
          handleClick={() => console.log("clicked")}
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
          <h4>1. Lorem ipsum dolor sit amet? </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt mauris metus, ut posuere ligula pulvinar eget. In
            fermentum mollis mauris et condimentum. Mauris nec mauris eu risus
            varius convallis. Aliquam ut varius turpis, sed condimentum sem.
          </p>
          <h4>2. Lorem ipsum dolor sit amet? </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt mauris metus, ut posuere ligula pulvinar eget. In
            fermentum mollis mauris et condimentum.
          </p>
          <h4>3. Lorem ipsum dolor sit amet? </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt mauris metus, ut posuere ligula pulvinar eget. In
            fermentum mollis mauris et condimentum. Mauris nec mauris eu risus
            varius convallis. Aliquam ut varius turpis, sed condimentum sem.
            Mauris nec mauris eu risus varius convallis. Aliquam ut varius
            turpis, sed condimentum sem.
          </p>
          <h4>4. Lorem ipsum dolor sit amet? </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt mauris metus, ut posuere ligula pulvinar eget. In
            fermentum mollis mauris et condimentum. Mauris nec mauris eu risus
            varius convallis. Aliquam ut varius turpis, sed condimentum sem.
            Mauris nec mauris eu risus varius convallis. Aliquam ut varius
            turpis, sed condimentum sem. Mauris nec mauris eu risus varius
            convallis. Aliquam ut varius turpis, sed condimentum sem.
          </p>
          <img src={close} alt="close" onClick={() => setShowFaqTrue(false)} />
        </Faq>
      ) : (
        <div></div>
      )}

      {isArrowClicked ? (
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
      ) : (
        <div></div>
      )}
    </Div>
  );
};
