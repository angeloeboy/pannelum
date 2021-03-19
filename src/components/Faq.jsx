import React from "react";
import styled from "styled-components";

const Freq = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #888;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ff6363;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ff3d3d;
  }
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

export let Faq = (props) => {
  return (
    <Freq>
      <h1>Frequently Asked Questions</h1>
      <h4>1. Lorem ipsum dolor sit amet? </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        mauris metus, ut posuere ligula pulvinar eget. In fermentum mollis
        mauris et condimentum. Mauris nec mauris eu risus varius convallis.
        Aliquam ut varius turpis, sed condimentum sem.
      </p>
      <h4>2. Lorem ipsum dolor sit amet? </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        mauris metus, ut posuere ligula pulvinar eget. In fermentum mollis
        mauris et condimentum.
      </p>
      <h4>3. Lorem ipsum dolor sit amet? </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        mauris metus, ut posuere ligula pulvinar eget. In fermentum mollis
        mauris et condimentum. Mauris nec mauris eu risus varius convallis.
        Aliquam ut varius turpis, sed condimentum sem. Mauris nec mauris eu
        risus varius convallis. Aliquam ut varius turpis, sed condimentum sem.
      </p>
      <h4>4. Lorem ipsum dolor sit amet? </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        mauris metus, ut posuere ligula pulvinar eget. In fermentum mollis
        mauris et condimentum. Mauris nec mauris eu risus varius convallis.
        Aliquam ut varius turpis, sed condimentum sem. Mauris nec mauris eu
        risus varius convallis. Aliquam ut varius turpis, sed condimentum sem.
        Mauris nec mauris eu risus varius convallis. Aliquam ut varius turpis,
        sed condimentum sem.
      </p>
      <img
        src={props.close}
        alt="close"
        onClick={() => props.setShowFaqTrue(false)}
      />
    </Freq>
  );
};
