import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import defaultImage from "../../assets/defaul_pet_img.jpeg";

const PetImageGallery = ({images = [], PetName}) => {
    const [thumbsSwiper] = useState(null);

    const displayImages = images.length > 0 ? images : [{ image: defaultImage }];
    console.log(images);
    // const displayImages = Array.isArray(images) && images.length > 0 ? images : [defaultImage];
    return (
        <div className="rounded-lg border border-yellow-300 overflow-hidden">
            <Swiper
            modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                className="product-main-slider"
            >
                {displayImages.map((imageObj,index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <div
                            className="aspect-square bg-base-100"
                        >
                            <img 
                                src={imageObj.image}
                                alt={PetName}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PetImageGallery;