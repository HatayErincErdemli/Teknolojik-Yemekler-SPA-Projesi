
import React from 'react'
import './App.css'
import Anasayfa from './pages/anasayfa'
import Siparisformu from './pages/siparisformu'
import Siparissucsess from './pages/siparissucsess'
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom'



function App() {
  

  return (
    
    <div>
      <Switch>
      <Route exact path="/">
        <Anasayfa />
      </Route>
      <Route path="/siparisformu">
        <Siparisformu />
      </Route>          
      <Route path="/siparissuccess">
            <Siparissucsess />
      </Route>
      </Switch>
    </div>
    
  )
}

export { App }
