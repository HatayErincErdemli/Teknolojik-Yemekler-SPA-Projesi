import React from "react";
import "../index.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Anasayfa() {
  const history = useHistory();
  function clickHandle() {
    history.push("/siparisformusayfası");
  }
  return (
    <div className="anasayfa">
      <img
        className="anasayfalogo"
        src="../Assets/Iteration-1-assets/logo.svg"
      />
      <h1 className="anasayfaBaslık">
        KOD ACIKTIRIR
        <br /> PİZZA, DOYURUR
      </h1>
      <button onClick={clickHandle} className="anasayfaButton">
        ACIKTIM
      </button>
    </div>
  );
}

export default Anasayfa;
