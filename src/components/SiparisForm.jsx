import React, { useState } from "react";
import styled from "styled-components";
import { ekMalzemeler } from "../data";
import Malzeme from "./Malzeme";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  border: 1px solid black;
  width: 45%;
`;
const Button = styled.button`
  width: 100%;
  background: #fdc913;
  border-radius: 10px;
  padding: 1rem;
`;
const SiparisButtonContainer = styled.div`
  border: 0.1px solid #5f5f5f;
  border-radius: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const EkMalzemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 50%;
`;
const Label = styled.label``;

const initalFormData = {
  boyut: "",
  hamur: "",
  malzemeler: [],
  kisininAdı: "",
  siparisNotu: "",
};

function SiparisForm() {
  const [formData, setFormData] = useState(initalFormData);
  const [error, setError] = useState({
    boyut: "",
    hamur: "",
    kisininAdı: "",
    malzemeler: "",
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("https://reqres.in/api/pizza", formData).then((response) => {
      console.log(response.data);
      history.push("/siparissucsesssayfası");
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>aaaaaaa</h2>
      <p>Boyut Seç *</p>
      <Label>
        <input type="radio" name="boyut" />
        Küçük
      </Label>
      <Label>
        <input type="radio" name="boyut" />
        Orta
      </Label>
      <Label>
        <input type="radio" name="boyut" />
        Büyük
      </Label>

      <Label>
        <p>Hamur Seç *</p>
        <select>
          <option name="hamur" value="ince">
            İnce hamur
          </option>
          <option name="hamur" value="orta">
            Orta hamur
          </option>
          <option name="hamur" value="kalın">
            Kalın hamur
          </option>
        </select>
      </Label>
      <p>Ek Malzemeler</p>
      <EkMalzemeContainer>
        {ekMalzemeler.map((item, index) => (
          <Malzeme malzeme={item} key={index} />
        ))}
      </EkMalzemeContainer>

      <p>
        <label>
          Sipariş Veren Kişinin Adı
          <input type="text" name="siparis-name" />
        </label>
        <label>
          Sipariş Notu
          <input type="text" name="siparis-notu" />
        </label>
      </p>
      <SiparisButtonContainer>
        <h3>Sipariş Toplamı</h3>
        <p>Ek Malzemeler</p>
        <p>Toplam</p>
        <Button disabled={!isValid}>Sipariş Ver</Button>
      </SiparisButtonContainer>
    </Form>
  );
}

export default SiparisForm;
