import { Skeleton } from '@mui/material'
import React from 'react'
import s from '../../styles/MainPage/GoodsList.module.sass'

const SkeletonGoodsList = () => {
  return (
    <div className={s.ListColumns} style={{marginTop:'20px'}}>
        <Skeleton variant="rectangular" height={350} />
        <Skeleton variant="rectangular" height={350} />
        <Skeleton variant="rectangular" height={350} />
        <Skeleton variant="rectangular" height={350} />
        <Skeleton variant="rectangular" height={350} />
        <Skeleton variant="rectangular" height={350} />
    </div>
  )
}

export default SkeletonGoodsList