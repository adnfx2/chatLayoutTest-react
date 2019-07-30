import React from "react";
import styles from "./ChatInput.module.scss";

const ChatInput = ({ typing, onChange, sendMessageHandler, userId }) => {
  return (
    <form
      className={styles.chatInput}
      onSubmit={e => {
        e.preventDefault();
        sendMessageHandler(typing, userId);
      }}
    >
      <input
        className={styles.chatInput__input}
        onChange={e => onChange(e.target.value)}
        value={typing}
        placeholder="write a message"
      />
    </form>
  );
};

export default ChatInput;
