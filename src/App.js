import { useState } from 'react';
import './app.css';
import react from 'react';

export default function App(){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [msg, setMsg] = useState('');

  function calculateImc() {
    const alt = height / 100
    const imc = weight / (alt * alt)

    if (imc < 18.5) {
      setMsg(`Você está ABAIXO DO PESO, seu imc é ${imc.toFixed(1)}!`)
    } else if (imc >= 18.5 && imc < 24.9) {
      setMsg(`Você está com o PESO IDEAL, seu imc é ${imc.toFixed(1)}!`)  
    } else if (imc >= 24.9 && imc < 30) {
      setMsg(`Você está com SOBREPESO, seu imc é ${imc.toFixed(1)}!`)
    } else if (imc >= 30) {
      setMsg(`Você está com OBESIDADE, seu imc é ${imc.toFixed(1)}!`)
    } else {
      setMsg(`[ERRO] Dado inválido, tente novamente!`)
    }
  }

  return(
    <div className="app">
      <h1>
        Calculadora IMC
      </h1>
      <span>
        Vamos calcular seu imc
      </span>

      <div className="area-input">
        <input type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={weight}
          onChange={ (e) => setWeight(e.target.value)}
        />
        <input type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={height}
          onChange={ (e) => setHeight(e.target.value)}
        />

        <button onClick={calculateImc}>
          Calcular
        </button>
      </div>

      <h2>
        {msg}
      </h2>
    </div>  
  )
}

