import React, { Dispatch } from "react";

export type ContextState = {
  hasUploaded: boolean;
  isFetchingThumbnail: boolean;
  generatedThumbnail: any;
};

export type Action = {
  type: string;
  payload?: never;
};

export type ContextValue = {
  state: ContextState;
  dispatch: Dispatch<Action>;
};

const initialState: ContextState = {
  hasUploaded: false,
  isFetchingThumbnail: false,
  generatedThumbnail: null
};
const state = {
  state: initialState,
  dispatch: () => {}
};
export default React.createContext<ContextValue>(state);
