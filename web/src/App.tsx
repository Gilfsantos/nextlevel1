import React from 'react';

import './App.css';

import Header from './Header';

function App() {
  const counter = 1
  return (
    <div>
      <Header title = "Hello World" />
      <Header title = "cachorro doido" />
      <Header title = "sabao do mar" />
      <Header title = "pagina virada" />
      

      <h1>{counter}</h1>
      <button type="button" onClick={console.log}>aumentar</button>

      <h1>Conteudo da aplicaçao</h1>
    </div>
  );
}

export default App;
