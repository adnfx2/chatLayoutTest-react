import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "../../actions/actionCreators";
import styles from "./ChatWindow.module.scss";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatInput from "../../components/ChatInput/ChatInput";

const ChatWindow = ({
  activeUser,
  messages,
  typing,
  onTypeHandler,
  sendMessageHandler
}) => (
  <div className={styles.chatWindow}>
    <ChatHeader user={activeUser} />
    <ChatMessages messages={messages} userId={activeUser.user_id}/>
    <ChatInput
      typing={typing}
      onChange={onTypeHandler}
      sendMessageHandler={sendMessageHandler}
      userId={activeUser.user_id}
    />
  </div>
);

const mapStateToProps = ({ activeUserId, contacts, messages, typing }) => ({
  activeUser: contacts[activeUserId],
  messages: _.values(messages[activeUserId]),
  typing
});

const mapDispathToProps = dispatch => ({
  onTypeHandler: value => dispatch(actions.setTypingValue(value)),
  sendMessageHandler: (message, userId) =>
    dispatch(actions.sendMessage(message, userId))
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ChatWindow);
