
import { useState } from 'react';
import prince from './assets/pequenoprincipe.png'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">

          <div className="login-form">
            <div className="login-form-title">Bem Vindo !</div>
            <div className="login-form-title">
              <img src={prince} alt="Cats" />
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className="focus-input" data-placeholder="Email"></div>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <div className="focus-input" data-placeholder="Password"></div>
            </div>

            <div className="container-login-form-btn">
              <button className='login-form-btn'>Login</button>
            </div>

            <div className="text-center">
              <div className="text1">Não possui conta?</div>
              <a className="txt2">Criar conta</a>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default App;
