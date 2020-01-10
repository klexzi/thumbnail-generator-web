import React, { useState, useReducer } from "react";
import Column from "../../styled-components/Column/Column";
import Grid from "../../styled-components/Grid/Grid";
import UploadBox from "../UploadBox/UploadBox";
import DownloadBox from "../DownloadBox/DownloadBox";
import StateContext, { ContextState, Action } from "../../context/StateContext";

const initialState = {
  hasUploaded: false,
  isFetchingThumbnail: false,
  generatedThumbnail: null
};

const stateReducer = (state: ContextState, action: Action) => {
  switch (action.type) {
    case "uploadComplete":
      return { ...state, hasUploaded: true, isFetchingThumbnail: true };
    case "fetchThumbnail":
      return { ...state, isFetchingThumbnail: true };
    case "fetchThumbnailSuccessful":
      return {
        ...state,
        isFetchingThumbnail: false,
        generatedThumbnail: action.payload
      };
    default:
      return state;
  }
};
const Main = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const contextValue = {
    state,
    dispatch
  };
  return (
    <StateContext.Provider value={contextValue}>
      <Grid>
        <Column>
          <UploadBox />
        </Column>
        <Column>
          <DownloadBox />
        </Column>
      </Grid>
    </StateContext.Provider>
  );
};

export default Main;
