import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { FetchUsers } from '../API Service/API'
import { useNavigate } from 'react-router-dom'
import s from '../styles/LoginPage/loginPage.module.sass'

const LoginPage = () => {

  const router = useNavigate()
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [valueEmpty, setValueEmpty] = useState(false)

  return (
    <div className={s.main}>
    <p style={{position:'absolute', top:'20vh'}}>
    "login": "admin",
    "password": "1234"
    "login": "user",
    "password": "qwerty"
    "login": "guest",
    "password": "lolkekguest"
    </p>
      <form onClick={(e) => e.preventDefault()} className={s.loginCard}>
      <p className={s.title}>Авторизация</p>
      <input className={s.loginInput} value={login} placeholder='Логин' onChange={(e) => setLogin(e.target.value)}></input>
      <input className={s.loginInput} type='password' value={password} placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}></input>
      <div className={s.errorsContainer}>
        {
          valueEmpty && <p className={s.loginError}>{valueEmpty}</p>
        }
        {
          error && <p className={s.loginError}>{error}</p>
        }  
      </div>
      <button className={s.submit} onClick={() => {
        if (login.length > 0 && password.length > 0) {
          FetchUsers({dispatch, login, password, setError, router})
          setLogin('')
          setPassword('')
          setError(false)
          setValueEmpty(false)
        }
        else {
          setValueEmpty('Для авторизации введите логин и пароль')
        }
      }}
      >Войти</button>
      </form>
    </div>
  )
}

export default LoginPage