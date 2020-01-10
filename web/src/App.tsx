import React from "react";

import "normalize.css";
import Page from "./styled-components/Page/Page";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
const App: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main />
    </Page>
  );
};

export default App;
