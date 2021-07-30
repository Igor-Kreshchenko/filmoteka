import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = ({ onClick, name, text }) => {
  return (
    <Button color="primary" variant="outlined" onClick={onClick} name={name}>
      {text}
    </Button>
  );
};

export default MyButton;
