import React, { useState } from 'react'
import Navigation from './Navigation'
import s from '../styles/header.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import CartModal from '../pages/CartModal'
import modalOrPage from '../styles/header.module.sass'
import { Link } from 'react-router-dom'
import { logOut } from '../API Service/API'


const Header = () => {
  const isAuth = useSelector(state => state.user.auth)
  const [cartVisible, setCartVisible] = useState(false)
  const amountInCart = useSelector(state => state.cart.amount)
  const dispatch = useDispatch()
  return (
    <div className={s.main}>
       <Navigation links={[
        {link: '/nobody', value: 'Главная'},
        {link: '/nobody', value: 'Главная'},
        {link: '/nobody', value: 'Главная'},
        {link: '/MainPage/cart', value: 'На страницу корзины'},
       ]}/>
    <div className={s.setAuth}>
      {
        isAuth ? 
        <button onClick={() => logOut({dispatch})}>Выйти</button>
        :
        <Link to='/MainPage/login'><p>Войти</p></Link>
      }
                
    </div>
       <div onClick={() => setCartVisible(true)} className={s.cartIcon} style={{backgroundImage:'url(/images/shopping_cart.svg)'}}>
        <span className={s.cartLength}>{amountInCart}</span>
        {
          cartVisible && <><CartModal modalOrPage={modalOrPage.modal}/></>
        }
        
       </div>
       <div className={s.closeModal} style={cartVisible ? {display:'block'} : {}} onClick={() => setCartVisible(false)}></div> 
    </div>
  )
}

export default Header