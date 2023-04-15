import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { IMAGES_DESKTOP } from '../../../../../constant/constant'
import * as style from '../../../../../styles/webpage/main/sections/interface'

const ImagesSlider = () => {
  return (
    <Swiper
      effect='coverflow'
      grabCursor={true}
      loop={true}
      zoom={true}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {IMAGES_DESKTOP.map((item) => (
        <SwiperSlide key={item.id}>
          <style.ImageResponsive src={item.image} alt='image preview' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImagesSlider
