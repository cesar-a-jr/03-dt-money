import { HomeContainer, Buttons } from './styles'
import DTMoney from '../../assets/DTMONEY.png'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <div>
          <h1>Controle suas finaças!</h1>
          <p>Realize seus sonhos com a DT Money</p>
          <Buttons>
            <Link to={'/entrar'}>
              <button>Entrar</button>
            </Link>
            <Link to={'/registrar'}>
              <button>Registrar</button>
            </Link>
          </Buttons>
        </div>
        <div>
          <img src={DTMoney} alt="" />
        </div>
      </HomeContainer>
    </div>
  )
}
