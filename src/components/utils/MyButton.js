import React from "react";
import Button from "@material-ui/core/Button";
import ticket_icon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          background: props.background,
          color: props.color
        }}
      >
        <img src={ticket_icon} className="iconImage" alt="button_icon" />
        {props.text}
      </Button>
    </div>
  );
};
export default MyButton;
