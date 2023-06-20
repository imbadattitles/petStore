import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../styles/cartPage/cart.module.sass'
import { deleteItems, setAmount} from '../store/cartReducer'
import { MinusCount, PlusCount } from '../Hooks/CartHooks'

const CartModal = ({modalOrPage}) => {
    
const items = useSelector(state => state.cart.items)
const dispatch = useDispatch()
const [allPrice, setAllPrice] = useState(0)
const amountInCart = useSelector(state => state.cart.amount)


useEffect(() => {
      let newAllPrice = items.reduce((accum, item) => {
        accum = accum+item.totalPrice
        return accum
      }, 0)
      setAllPrice(newAllPrice)
},[items])


  return (
    <div className={modalOrPage}>
        <p className={s.title}>В вашей корзине {amountInCart ? amountInCart : 'нет'} товаров</p>
        {items.length ? 
        <>
            <div className={s.cart}>
            {items.map(item => 
                <div className={s.item}>
                    <img className={s.photo} src={item?.photo}/>
                    <p className={s.itemTitle}>{item?.name}</p>
                    <p className={s.category}>{item?.category}</p>
                    <span className={s.price}><p>Цена одного товара</p> {item?.price} ₽</span>
                    <span className={s.totalPrice}><p>Цена всех товаров</p>{item?.totalPrice} ₽</span>
                    <div className={s.count}>
                        <button className={s.countBtn} onClick={() => MinusCount({item, items, dispatch, amountInCart})}>-</button>
                        {item?.count} штук
                        <button className={s.countBtn} onClick={() => PlusCount({item, items, dispatch, amountInCart})}>+</button>
                    </div>
                    <button className={s.deleteBtn} onClick={() => dispatch(deleteItems(item), dispatch(setAmount(amountInCart - item.count)))}>Убрать товар из корзины</button>
                </div>
            )}
                    <p className={s.allPrice}>общая цена {allPrice} ₽</p>
            </div>
            <button className={s.buyBtn}>Оформить заказ</button>
        </>
        :
        <></>
        }

    </div>
  )
}

export default CartModal