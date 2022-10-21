import './imageSliderProd.css';
import { imageDataProd } from "../../assets/producoes";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, EffectCoverflow, Pagination, Autoplay} from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const ImageSliderProd = () => {

    return <>
    
        <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            navigation={true}
            autoplay={true}
            modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
            effect={"coverflow"}
            centeredSlides={true}
            grabCursor={true}
            pagination={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            className="product-image-slider"
        >
            {imageDataProd.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img className="img" src={item.image} alt="imagem slide"/>
                    </SwiperSlide>
                )
            })}

        </Swiper>
        
        </>
}


export default ImageSliderProd;