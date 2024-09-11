import React from "react";

import Anasayfa from "./pages/anasayfa";
import Siparisformu from "./pages/siparisformusayfası";
import Siparissucsess from "./pages/siparissucsesssayfası";
import { Route, Router, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Anasayfa />
        </Route>
        <Route path="/siparisformusayfası">
          <Siparisformu />
        </Route>
        <Route path="/siparissucsesssayfası">
          <Siparissucsess />
        </Route>
      </Switch>
    </div>
  );
}

export { App };
