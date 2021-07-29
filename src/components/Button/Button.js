import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Button.module.css";

const MyButton = ({ onClick, name, text }) => {
  return (
    <Button
      variant="outlined"
      className={styles.button}
      onClick={onClick}
      name={name}
    >
      {text}
    </Button>
  );
};

export default MyButton;
