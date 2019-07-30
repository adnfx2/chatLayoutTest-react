import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import User from "../../components/User/User";
import styles from "./Sidebar.module.scss";
import * as actions from "../../actions/actionCreators";

const Sidebar = ({ contacts, setUserIdHanler }) => (
  <aside className={styles.sidebar}>
    {contacts.map(contact => (
      <User key={contact.user_id} contact={contact} onClick={setUserIdHanler} />
    ))}
  </aside>
);

const mapStateToProps = state => {
  return {
    contacts: _.values(state.contacts)
  };
};

const mapDispatchToProps = dispatch => ({
  setUserIdHanler: id => dispatch(actions.setActiveUserId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
