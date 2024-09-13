import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Siparissucsess() {
  const history = useHistory();
  function clickHandle() {
    history.push("/");
  }
  return (
    <body className="siparisSuccess">
      <img
        onClick={clickHandle}
        className="siparisSuccessSayfasılogo"
        src="../Assets/Iteration-1-assets/logo.svg"
      />
      <h1 className="successBaslık">
        TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
      </h1>
    </body>
  );
}

export default Siparissucsess;
