import React from 'react'
import s from '../styles/MainPage/GoodsList.module.sass'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { inCart } from '../Hooks/CartHooks'

const GoodsItem = ({item}) => {

const router = useNavigate()
const cart = useSelector(state => state.cart.items)
const dispatch = useDispatch()
const amountInCart = useSelector(state => state.cart.amount)

  return (
    <div className={s.card}>
      <img className={s.photo} src={item.photo}/>
      <p className={s.title}>{item.name}</p>
      <p className={s.category}>{item.category}</p>
      <div>
        <span className={s.price}>{item.price} ₽</span>
      </div>
      <button className={s.inCart} onClick={() => inCart({item, cart, dispatch, amountInCart})}>В корзину</button>
      <button onClick={() => router(`/MainPage/${item.itemNumber}`)} className={s.about}>Подробнее</button>
    </div>
  )
}

export default GoodsItem