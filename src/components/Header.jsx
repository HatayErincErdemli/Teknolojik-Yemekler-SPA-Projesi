import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background: #ce2829;
  width: 100%;
`;
const Title = styled.h1`
  margin: 0px;
  color: #faf7f2;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

function Headers() {
  return (
    <Header>
      <Title>
        <img
          className="siparisSayfasılogo"
          src="../Assets/Iteration-1-assets/logo.svg"
        />
      </Title>
    </Header>
  );
}

export default Headers;
