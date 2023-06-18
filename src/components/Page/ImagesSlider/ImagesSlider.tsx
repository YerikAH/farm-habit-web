import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGES_DESKTOP } from './images_slider'
import 'swiper/css'
import s from './images_slider.module.css'

const ImagesSlider = () => {
  return (
    <Swiper
      effect='slide'
      grabCursor={true}
      loop={true}
      zoom={true}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
    >
      {IMAGES_DESKTOP.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img className={s.image_slider} src={item.image} alt='image preview' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImagesSlider
