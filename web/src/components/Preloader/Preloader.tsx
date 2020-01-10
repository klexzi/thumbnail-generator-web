import React from "react";
import styled from "styled-components";
import loaderSVG from "../../assets/loader.svg";

const PreloaderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Preloader = () => {
  return (
    <PreloaderStyled>
      <img src={loaderSVG} alt="loading..." />
    </PreloaderStyled>
  );
};

export default Preloader;
