import './App.css'
import { useState } from 'react'

function App () {
  const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState()
  const [female, setFemale] = useState()
  const [male, setMale] = useState()
  const [promille, setPromille] = useState(0)
  const [grams, setGrams] = useState(0)
  const [gramsleft, setGramsleft] = useState(0)
  const [burning, setBurning] = useState(0)
  const [litres, setLitres] = useState(0)
  const [result, setResult] = useState(0)

  function calculate (e) {
    e.preventDefault()

    setLitres(bottles * 0.33)
    setGrams(litres * 8 * 4.5)
    setBurning(weight / 10)
    setGramsleft(grams - burning * time)

    setPromille((grams / weight) * 0.6)
  }

  return (
    <div id='container'>
      <h3>Calculating alcohol blood levelllll</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
        </div>
        <input
          type='text'
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />

        <div>
          <label>Bottles</label>
        </div>
        <input
          type='number'
          value={bottles}
          onChange={e => setBottles(e.target.value)}
        />

        <div>
          <label>Time</label>
        </div>
        <input
          type='number'
          value={time}
          onChange={e => setTime(e.target.value)}
        />

        <div>Gender</div>
        <div>
          <label>Female</label>

          <input
            type='radio'
            value={female}
            onChange={e => setFemale(e.target.value)}
          />

          <label>Male</label>

          <input
            type='radio'
            value={male}
            onChange={e => setMale(e.target.value)}
          />
        </div>

        <div>
          <label></label>
          <output>{promille}</output>
        </div>

        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default App
