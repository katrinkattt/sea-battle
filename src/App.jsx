import React from 'react'
import { Field } from './components/field'
import Button from './components/button'
import Window from './components/window'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header>
        <h3>морской бой</h3>
      </header>
      <div className="control">
        <Window title="введите имена" />
      </div>
      <div className="control">
        <Button name="start game" />
      </div>
      <Field />
      <Footer />
    </div>
  );
}


export default App;
