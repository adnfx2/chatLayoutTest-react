import React from "react";
import styles from "./ChatHeader.module.scss";

const ChatHeader = ({ user: { name, status }, user }) => (
  <header className={styles.chatHeader}>
    <h1 className={styles.chatHeader__name}>{name}</h1>
    <p className={styles.chatHeader__status}>{status}</p>
  </header>
);

export default ChatHeader;
