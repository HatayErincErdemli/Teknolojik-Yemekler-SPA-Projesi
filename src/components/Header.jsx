import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background: #ce2829;
  width: 100%;
`;
const Title = styled.h1`
  color: #faf7f2;
  display: flex;
  justify-content: center;
`;

function Headers() {
  return (
    <Header>
      <Title>Teknolojik Yemekler</Title>
    </Header>
  );
}

export default Headers;
