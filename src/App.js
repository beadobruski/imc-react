import { useState } from 'react';

import './app.css';
export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [message, setMessage] = useState('');

  function calcImc() {
    const height2 = height / 100;
    const imc = weight / (height2 * height2);

    if (imc < 18.6) {
      setMessage(`Seu IMC é de ${imc.toFixed(1)} e você está abaixo do peso.`);
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage(
        `Seu IMC é de ${imc.toFixed(1)} e você está com o peso ideal.`
      );
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage(
        `Seu IMC é de ${imc.toFixed(1)} e você está um pouco acima do peso.`
      );
    } else if (imc > 34.9) {
      setMessage(
        `Seu IMC é de ${imc.toFixed(1)} e você está obeso, tome cuidado!`
      );
    }
  }

  return (
    <div className='app'>
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu IMC!</span>

      <div className='area-input'>
        <input
          type='number'
          placeholder='Peso em (kg) ex: 90'
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />

        <input
          type='number'
          placeholder='Altura em (cm) ex: 180'
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />

        <button onClick={calcImc}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}
