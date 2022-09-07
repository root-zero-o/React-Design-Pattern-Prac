import React from "react";
import Card from "./components/Card";
// 불필요한 prop drilling없이 표현적이고 선언적인 컴포넌트를 만들 수 있도록 도와주는 패턴
// 커스터마이징 용이, 관심사 분리해 이해하기 쉬움

const Compound = () => {
  return (
    <Card>
      <Card.Title>Compound Components Pattern</Card.Title>
      <Card.Text>
        불필요한 prop drilling없이 표현적이고 선언적인 컴포넌트를 만들 수 있도록
        도와주는 패턴
      </Card.Text>
      <Card.Button>이해했다!</Card.Button>
    </Card>
  );
};

export default Compound;
