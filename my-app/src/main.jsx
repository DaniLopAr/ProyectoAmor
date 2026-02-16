import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContadorTeAmos from './App.jsx'
import { HideMessage } from './App.jsx'
import { InputText } from './App.jsx'
import { SalidasPendientes } from './App.jsx'

import { MensajeInicial, CuteButtons, DiasJuntos, ShowLetter, SpotifyFlotante, Razones, CorazonesFondo } from './Inicio.jsx'
import './Inicio.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MensajeInicial />
    <CuteButtons />
    <DiasJuntos />
    <ShowLetter />
    <SpotifyFlotante />
    <Razones />
    <CorazonesFondo />
  </StrictMode>,
)
