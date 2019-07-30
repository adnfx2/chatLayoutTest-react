import React from "react";
import styles from "./User.module.scss";

const User = ({ contact: { name, profile_pic, status, user_id }, onClick }) => (
  <div className={styles.user} onClick={() => onClick(user_id)}>
    <img className={styles.user__pic} src={profile_pic} alt={name} />
    <div className={styles.user__details}>
      <p className={styles.user__name}>{name}</p>
      <p className={styles.user_status}>{status}</p>
    </div>
  </div>
);

export default User;
