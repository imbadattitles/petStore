import React, { useState } from 'react'
import GoodsChoose from '../components/GoodsChoose'
import GoodsList from '../components/GoodsList'
import s from '../styles/MainPage/MainPage.module.sass'

const MainPage = () => {
  const [selectCategory, setSelectCategory] = useState('')

  return (
    <div className={s.main}>
        <GoodsChoose props={{setSelectCategory, selectCategory}}/>
        <GoodsList selectCategory={selectCategory}/>
    </div>
  )
}

export default MainPage