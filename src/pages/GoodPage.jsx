import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import s from '../styles/GoodPage/ProductInfo.module.sass'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import GoodsItem from '../components/GoodsItem'
import { fetchItem, fetchSimiliar} from '../API Service/API'
import { inCart } from '../Hooks/CartHooks';
import SkeletonProductInfo from '../components/Skeleton/SkeletonProductInfo';
import SkeletonProductSimiliar from '../components/Skeleton/SkeletonProductSimiliar';

const GoodPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.itemNumber
    const loading = useSelector(state => state.goods.isLoading)
    const cart = useSelector(state => state.cart.items)
    const [item, setItem] = useState({})
    const [similarGoods, setSimilarGoods] = useState([])
    const similarLoading = useSelector(state => state.goods.isSimilarLoading)
    const amountInCart = useSelector(state => state.cart.amount)

    useEffect(() => {
        fetchItem({id, dispatch, setItem})
    }, [params])

    useEffect(() => {
        fetchSimiliar({item, dispatch, setSimilarGoods})
    }, [item])

  return (
    <div className={s.main}>
        {
            loading 
            ?
                <SkeletonProductInfo/>
            :
            <>
                <div className={s.goodsRow}>
                <img className={s.photo} src={item.photo}/>
                <div className={s.goodsInteract}>
                    <h3 className={s.title}>{item.name}</h3>
                    <p className={s.category}>{item.category}</p>
                    <p className={s.about}>{item.info?.about}</p>
                    <p className={s.price}>{item.price} ₽</p>
                    <span className={item.inStock ? s.inStock : s.notInStock}>{item.inStock ? "В наличии" : "Нет в наличии"}</span>
                    <button
                    onClick={() => inCart({item, cart, dispatch, amountInCart})}
                    className={s.inCart}
                    >
                    В корзину
                    </button>
                </div>
                </div>
                <div className={s.chars}>
                    <p className={s.charsTitle}>Характеристики</p>
                    <ul>
                        <li className={s.char}><span className={s.charTitle}>Характеристика 1</span> {item.info?.char1}</li>
                        <li className={s.char}><span className={s.charTitle}>Характеристика 2</span> {item.info?.char2}</li>
                        <li className={s.char}><span className={s.charTitle}>Характеристика 3</span> {item.info?.char3}</li>
                    </ul>
                </div>
            </>
        }
        
        <div className={s.similarGoodsSwipe}>
        <p className={s.charsTitle}>Похожие товары</p>
        {
            similarLoading 
            ?
            <SkeletonProductSimiliar/>
            :
            <>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                >
                    {
                        similarGoods.map(item => 
                            <SwiperSlide>
                                <GoodsItem item={item}/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </>
        }

        </div>
    </div>
  )
}

export default GoodPage