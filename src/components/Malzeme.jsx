import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 30%;
`;
function Malzeme(props) {
  const { malzeme, fiyat, setFiyat, isSelected, handleChange } = props;
  return (
    <Label>
      <input
        type="checkbox"
        name="malzemeler"
        value={malzeme}
        checked={isSelected}
        onChange={handleChange}
      />
      {malzeme}
    </Label>
  );
}

export default Malzeme;
