import React, { useEffect } from 'react'
import { fetchCategories, isCategoriesLoading, selectCategories } from '../store/goodsReducer'
import { useDispatch, useSelector } from 'react-redux'
import s from '../styles/MainPage/GoodsChoose.module.sass'
import { Skeleton } from '@mui/material'
import { fetchCategoriesAction } from '../API Service/API'
import CategoryItem from './CategoryItem'

const GoodsChoose = ({props}) => {

const dispatch = useDispatch()
const categories = useSelector(state => state.goods.categories)
const loading = useSelector(state => state.goods.isCategoriesLoading)
const selectCategory = props.selectCategory
const setSelectCategory = props.setSelectCategory

useEffect(() => {
  fetchCategoriesAction({dispatch})
},[])
  return (
    
    <div className={s.chooseCard}>
      {
        loading 
        ? 
        <>
        <Skeleton variant="rectangular" width={210} height={200} />
        </>
        :
        <>
        {
          categories.map(item => 
            <CategoryItem props={{item, s, selectCategory, setSelectCategory}}/>
          )
        }
        </>
      }
      
    </div>
  )
}

export default GoodsChoose