import React from "react";
import { connect } from "react-redux";
import styles from "./main.module.scss";
import Empty from "../../components/Empty/Empty";
import ChatWindow from "../ChatWindow/ChatWindow";

const Main = ({ user, activeUserId, setUserIdHanler }) => (
  <main className={styles.main}>
    {!activeUserId ? (
      <Empty user={user} activeUserId={activeUserId} />
    ) : (
      <ChatWindow />
    )}
  </main>
);

const mapStateToProps = state => ({
  user: state.user,
  activeUserId: state.activeUserId
});

export default connect(mapStateToProps)(Main);
