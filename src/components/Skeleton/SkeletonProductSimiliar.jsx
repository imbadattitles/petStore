import { Skeleton } from '@mui/material';
import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SkeletonProductSimiliar = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={4}
    navigation
    >               
                <SwiperSlide>
                <Skeleton variant="rectangular" height={350}/>
                </SwiperSlide>
                <SwiperSlide>
                <Skeleton variant="rectangular" height={350}/>
                </SwiperSlide>
                <SwiperSlide>
                <Skeleton variant="rectangular" height={350}/>
                </SwiperSlide>
                <SwiperSlide>
                <Skeleton variant="rectangular" height={350}/>
                </SwiperSlide>
    </Swiper>

  )
}

export default SkeletonProductSimiliar