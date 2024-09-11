import React from "react";
import styled from "styled-components";
import Headers from "../components/Header";
import SiparisForm from "../components/SiparisForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

function Siparisformu() {
  return (
    <Wrapper>
      <Headers />
      <SiparisForm />
    </Wrapper>
  );
}

export default Siparisformu;
