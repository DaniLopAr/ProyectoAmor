import { useState } from 'react'
import './App.css'




export function ContadorTeAmos() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      <button onClick={() => setContador(0)}>Reset</button>
    </div>
  )
}


export function HideMessage() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {isVisible && <p>Te amo mucho, mi amor! ❤️</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar mensaje' : 'Mostrar mensaje'}
      </button>
    </div>
  )
}

export function InputText() {
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Texto ingresado: {text}</p>
    </div>
  )
}

export function SalidasPendientes() {
  const [inputValue, setInputValue] = useState("")
  const [dates, setDates] = useState([])

  const handleSave = () => {
    if (inputValue.trim() === "") return

    setDates(prevDates => [...prevDates, inputValue])
    setInputValue("")
  }

  return (
    <div>
      <h2>Salidas con mi novia ❤️</h2>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ej: Mirador en la noche"
      />

      <button onClick={handleSave}>
        Guardar salida
      </button>

      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  )
}






export default ContadorTeAmos;
