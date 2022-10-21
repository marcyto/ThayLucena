import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import { imageDataFeedbacks } from "../../assets/feedbacks";


import "swiper/css";
import "swiper/css/effect-cards";

const ImageSliderCards = () => {

    return <>

        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={true}
            className="product-image-slider"
        >

            {imageDataFeedbacks.map((item, index) => {
                return(
                    <SwiperSlide key={index}>
                        <img className="img" src={item.image} alt="Imagem Slide"/>
                    </SwiperSlide>
                )
            })}

        </Swiper>

    
    </>
    

}

export default ImageSliderCards;