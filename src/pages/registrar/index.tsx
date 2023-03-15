import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../../services/firebaseconection'
import { RegisterComponent } from './styles'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

export function Registrar() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log('usuario criado')
        navigate('/transactions')
      })
      .catch(() => {
        console.log('F usuario ')
      })
  }

  return (
    <div>
      <RegisterComponent>
        <h1>Crie sua conta e comece a se organizar!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu email:"
            {...register('email', { required: true })}
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha: min 6 caracteres"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          <button type="submit">
            Cadastrar <ArrowRight color="#FFF" size={24} />
          </button>
        </form>
      </RegisterComponent>
    </div>
  )
}
