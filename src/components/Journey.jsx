import React from "react";
import styled from "styled-components";

const Div = styled.div`
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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  overflow-y: scroll;
  h1 {
    color: white;
    text-align: center;
  }
  iframe {
    border: 2px solid pink;
    padding: 10px;
    width: 95%;
    height: 80%;
    margin: 0 auto;
    display: block;
  }

  button {
    color: white;
    background-color: transparent;
    border: 2px solid white;
    outline: none;
    padding: 10px;
    font-size: 1rem;
    display: block;
    margin: 20px auto;
  }
`;

export let Journey = (props) => {
  return (
    <Div>
      <h1>This is an embedded video from youtube. </h1>
      <iframe
        src="https://www.youtube.com/embed/uFAWIKVThjA"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />

      <button onClick={() => props.close(false)}>Exit</button>
    </Div>
  );
};
