import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = {
  variant: "info",
  children: String,
};

export default Message;
