import React, { useRef, useEffect } from "react";
import styles from "./ChatMessages.module.scss";

const ChatMessage = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span
      className={`${styles.chatMessage} ${
        is_user_msg ? styles["is-user-msg"] : ""
      }`}
    >
      {text}
    </span>
  );
};

const ChatMessages = ({ messages, userId }) => {
  const messagesLength = +Object.keys(messages).length;
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [messagesLength, userId]);
  return (
    <div ref={inputRef} className={styles.chatMessages}>
      {messages.map(message => (
        <ChatMessage message={message} key={message.number} />
      ))}
    </div>
  );
};

export default ChatMessages;
