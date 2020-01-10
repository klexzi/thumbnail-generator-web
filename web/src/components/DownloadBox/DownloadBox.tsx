import React, { useContext } from "react";
import styled from "styled-components";
import StateContext from "../../context/StateContext";
import { ContextValue } from "../../context/StateContext";
import Preloader from "../Preloader/Preloader";

const DownloadBoxStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 0;
  justify-content: center;
  align-items: center;
  border: 1px dotted black;
  @media only screen and (min-width: 770px) {
    height: 500px;
    padding: 0;
  }
`;
const DownloadBox = () => {
  const { state } = useContext<ContextValue>(StateContext);
  const { isFetchingThumbnail, generatedThumbnail } = state;
  return (
    <DownloadBoxStyled>
      {isFetchingThumbnail ? (
        <Preloader />
      ) : !isFetchingThumbnail && generatedThumbnail ? (
        <img src={generatedThumbnail} alt="thumbnail" />
      ) : (
        <div>your thumbnail will appear here</div>
      )}
    </DownloadBoxStyled>
  );
};

export default DownloadBox;
