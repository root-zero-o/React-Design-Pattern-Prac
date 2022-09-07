import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
`;

export const Text = styled.span`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: aliceblue;
  color: blueviolet;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
