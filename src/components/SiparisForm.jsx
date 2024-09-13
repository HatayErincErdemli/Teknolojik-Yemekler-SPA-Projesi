import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { boyut, ekMalzemeler, hamurKalınlıgı } from "../data";
import Malzeme from "./Malzeme";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "../index.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  width: 35%;
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
  boyut: [],
  hamur: "",
  malzemeler: [],
  kisininAdı: "",
  siparisNotu: "",
};

function SiparisForm() {
  const pizzaFiyat = 85.5;
  const [fiyat, setFiyat] = useState(pizzaFiyat);
  const [formData, setFormData] = useState(initalFormData);
  const [error, setError] = useState({
    boyut: "",
    hamur: "",
    kisininAdı: "",
    malzemeler: "",
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (
      formData.kisininAdı !== "" &&
      formData.boyut !== "" &&
      formData.malzemeler.length >= 3 &&
      formData.malzemeler.length <= 10
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log(response.data);
        history.push("/siparissucsesssayfası");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "kisininAdı") {
      if (value == "") {
        setError({
          ...error,
          [name]: "Lütfen teslim alacak kişinin adını yazınız",
        });
      } else {
        setError({ ...error, [name]: "" });
      }
    }

    if (name === "malzemeler") {
      let newMalzemeler;
      if (formData.malzemeler.includes(value)) {
        newMalzemeler = formData.malzemeler.filter((item) => item !== value);
      } else {
        newMalzemeler = [...formData.malzemeler, value];
      }
      if (newMalzemeler.length >= 3 && newMalzemeler.length <= 10) {
        setError({ ...error, [name]: "" });
      } else {
        setError({
          ...error,
          [name]: "Lütfen en az 3 ve en fazla 10 ek malzeme seçiniz",
        });
      }
      setFormData({ ...formData, [name]: newMalzemeler });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Position Absolute Acı Pizza</h2>
      <div className="fiyat-container">{fiyat} TL</div>
      <p className="formParagraf">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <h3>Boyut Seç *</h3>

      {boyut.map((item, index) => (
        <Label>
          <input
            type="radio"
            name="boyut"
            value={item}
            key={index}
            onChange={handleChange}
          />
          {item}
        </Label>
      ))}
      {error.boyut && <p className="errorMessage">{error.boyut}</p>}

      <div>
        <h3>Hamur Seç *</h3>
        <select>
          {hamurKalınlıgı.map((item, index) => (
            <option key={index} name="hamur" value={item}>
              {item}
            </option>
          ))}
        </select>
        {error.hamur && <p className="errorMessage">{error.hamur}</p>}
      </div>
      <h3>Ek Malzemeler *</h3>
      <EkMalzemeContainer>
        {ekMalzemeler.map((item, index) => (
          <Malzeme
            fiyat={fiyat}
            setFiyat={setFiyat}
            malzeme={item}
            key={index}
            handleChange={handleChange}
            isSelected={formData.malzemeler.includes(item)}
          />
        ))}
      </EkMalzemeContainer>
      {error.malzemeler && <p className="errorMessage">{error.malzemeler}</p>}

      <div>
        <label>
          <h3>Sipariş Veren Kişinin Adı *</h3>
          <input
            type="text"
            name="kisininAdı"
            value={formData.kisininAdı}
            onChange={handleChange}
          />
          {error.kisininAdı && (
            <p className="errorMessage">{error.kisininAdı}</p>
          )}
        </label>
        <label>
          <h3>Sipariş Notu</h3>
          <input
            type="text"
            name="siparisNotu"
            value={formData.siparisNotu}
            onChange={handleChange}
          />
        </label>
      </div>
      <SiparisButtonContainer>
        <h3>Sipariş Toplamı</h3>
        <p>Ek Malzeme Seçimleri</p>
        {formData.malzemeler.length * 5}
        <p>Toplam</p>
        {pizzaFiyat + formData.malzemeler.length * 5}

        <Button disabled={!isValid}>Sipariş Ver</Button>
      </SiparisButtonContainer>
    </Form>
  );
}

export default SiparisForm;
