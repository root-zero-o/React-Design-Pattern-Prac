import React from "react";
import { Container, Title, Text, Button } from "../CardStyle";

const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default Card;
