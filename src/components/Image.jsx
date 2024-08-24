import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Image = (props) => {
  return (
    <>
      <img src={props.src} alt="" />
    </>
  );
};

export default Image;
