import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;
const Header = styled.div`
  background: #ce2829;
  width: 100%;
`;
const Title = styled.h1`
  color: #faf7f2;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled.button``;
const ButtonDiv = styled.div`
  margin: 1rem;
`;

function Siparisformu() {
  return (
    <Wrapper>
      <Header>
        <Title>Teknolojik Yemekler</Title>
      </Header>
      <div>
        <Form>
          <h2>aaaaaaa</h2>
          <p>
            Boyut Seç *
            <label>
              <input type="radio" name="boyut" />
              Küçük
            </label>
            <label>
              <input type="radio" name="boyut" />
              Orta
            </label>
            <label>
              <input type="radio" name="boyut" />
              Büyük
            </label>
          </p>
          <label>
            Hamur Seç *
            <select>
              <option value="ince">İnce hamur</option>
              <option value="orta">Orta hamur</option>
              <option value="kalın">Kalın hamur</option>
            </select>
          </label>
          <p>
            Ek Malzemeler
            <label>
              <input type="checkbox" name="opsiyon1" />
              opsiyon 1
            </label>
            <label>
              <input type="checkbox" name="opsiyon2" />
              opsiyon 2
            </label>
            <label>
              <input type="checkbox" name="opsiyon3" />
              opsiyon 3
            </label>
          </p>
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
          <ButtonDiv>
            <Button>Sipariş Ver</Button>
          </ButtonDiv>
        </Form>
      </div>
    </Wrapper>
  );
}

export default Siparisformu;
