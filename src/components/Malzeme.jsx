import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 30%;
`;
function Malzeme(props) {
  const { malzeme } = props;
  return (
    <Label>
      <input type="checkbox" name="malzeme" value={malzeme} /> {malzeme}
    </Label>
  );
}

export default Malzeme;
