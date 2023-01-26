import React from "react";

//import "../gallery.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import CH from "../assets/images/chostel.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Gallery(props) {
    return (
        <div style={{margin: "10px 20px"}}>
            <Swiper
                // include Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                //slidesPerView={3}
                slidesPerGroup={1}
                navigation={true}
                pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    // when window width is >= 320px
                    360: {
                        width: 360,
                        slidesPerView: 1.5
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2
                    },
                    // when window width is >= 992px
                    992: {
                        width: 992,
                        slidesPerView: 3
                    },

                    1200: {
                        width: 1200,
                        slidesPerView: 3
                    },
                    1920: {
                        width: 1920,
                        slidesPerView: 4
                    }
                }}
                display="flex"
                justifyContent="center"
            >
                <div className="swiper-img-wrap">
                    {props.images.map((image) => (
                        <SwiperSlide>
                            <img src={CH} alt="Gallery" width="100%" className="swiper-img"/>
                        </SwiperSlide>
                    ))}
                    ));
                </div>
            </Swiper>
        </div>
    );
}
