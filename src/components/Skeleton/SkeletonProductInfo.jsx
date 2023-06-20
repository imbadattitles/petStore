import { Skeleton } from '@mui/material'
import React from 'react'
import s from '../../styles/GoodPage/ProductInfo.module.sass'

const SkeletonProductInfo = () => {
  return (
    <>
    <div className={s.goodsRow}>
    <Skeleton variant="rectangular" height={350} width={550}/>
    <Skeleton variant="rectangular" height={350} width={800}/>
    </div>
    <div style={{marginBottom:'100px'}}>
    <Skeleton variant="rectangular" height={350}/>
    </div>
    </>
  )
}

export default SkeletonProductInfo