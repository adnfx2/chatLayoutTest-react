import React from "react";
import styles from "./App.module.scss";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
