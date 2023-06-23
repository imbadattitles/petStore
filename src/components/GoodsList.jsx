import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GoodsItem from './GoodsItem'
import s from '../styles/MainPage/GoodsList.module.sass'
import Sorting from './Sorting'
import {fetchGoodsAction, inCart } from '../API Service/API'
import SkeletonGoodsList from './Skeleton/SkeletonGoodsList'


const GoodsList = ({selectCategory}) => {
    
const isAuth = useSelector(state => state.user.auth)
const dispatch = useDispatch()
const goods = useSelector(state => state.goods.goods)
const category = selectCategory ? `category=${selectCategory}` : '';
const [searchValue, setSearchValue] = useState('')
const [sortValue, setSortValue] = useState({sortBy:'',order:''})
const search = searchValue ? `search=${searchValue}` : ''
const sort = sortValue.order ? `sortBy=${sortValue.sortBy}&order=${sortValue.order}` : ''
const [page, setPage] = useState(1)
const loading = useSelector(state => state.goods.isLoading)
useEffect(() => {
    fetchGoodsAction({sort, search, category, page, dispatch})
},[category, page, search, sort,isAuth])



  return (
    <div>
        <Sorting 
            selectStyle={s.selectStyle} 
            optionStyle={s.optionStyle} 
            sortingStyle={s.sortingStyle} 
            sort={sortValue} 
            setSort={setSortValue}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchStyle={s.search}
        />
        {
            loading ?
                <SkeletonGoodsList/>
            :
            <>

            <div className={s.ListColumns}>
                {goods
                .map(item => (
                    <GoodsItem key={item.articul} item={item}/>
                ))}
            </div>

            <div className={s.pagination}>
            {
                [...Array(4)].map((_, index) => <div className={page === index + 1 ? s.active : ''} onClick={() => setPage(index + 1)}>{index + 1}</div>)
            }
            </div>
            </>
            
            }
    </div>
  )
}

export default GoodsList