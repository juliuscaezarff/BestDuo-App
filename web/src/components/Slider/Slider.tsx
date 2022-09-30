import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { ReactNode } from 'react'

import 'swiper/css'

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps ) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings} >
      {children}
    </Swiper>
  )
}
