import React from 'react';
import './App.css';
import field from './images/field.png'
import Field from './scratch/Field'
import Field2 from './scratch/Field2'
import Field3 from './scratch/Field3'
import Field4 from './scratch/Field4'



function App() {
  return (
    <div className="App">
   
      <img src={field} alt='field' />
      <Field3 />
      <Field />
      <Field2 />
      <Field4 />
    </div>
  );
}

export default App;
