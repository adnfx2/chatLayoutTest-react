import React from "react";
import styles from "./Empty.module.scss";

const Empty = ({ user: { name, profile_pic, status } }) => (
  <div className={styles.Empty}>
    <h1 className={styles.Empty__name}>
      Welcome, {name && name.split(" ")[0]}
    </h1>
    <img className={styles.Empty__img} src={profile_pic} alt={name} />
    <p className={styles.Empty__status}>
      <b>Status:</b> {status}
    </p>
    <button className={styles.Empty__btn}>Start a conversation</button>
    <p className={styles.Empty__info}>
      Search for someone to start chatting with or go to Contacts to see who is
      available
    </p>
  </div>
);

export default Empty;
