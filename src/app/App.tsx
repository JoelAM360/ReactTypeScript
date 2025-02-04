import '../App.css'
import Routes from './routes'
import { UsuarioLogado } from './shared/contexts'


function App() {
  return (
    <UsuarioLogado>
      <Routes />
    </UsuarioLogado>
  )
}

export default App