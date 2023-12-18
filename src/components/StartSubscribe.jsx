import { Button } from "react-bootstrap";

const StartSubscribe = (props) => {
  return (
    <Button
      style={{
        width: "250px",
        height: "60px",
        borderRadius: "10px",
        background: "#F53838",
        border: "none",
      }}
    >
      {props.text}
    </Button>
  );
};

export default StartSubscribe;
