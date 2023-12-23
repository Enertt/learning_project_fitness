import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import './custom.css'

import s from './clientsSlider.module.css'
import result_1 from '../../assets/images/result_1.jpg'
import result_2 from '../../assets/images/result_2.jpg'
import result_3 from '../../assets/images/result_3.jpg'
import result_4 from '../../assets/images/result_4.jpg'
import result_5 from '../../assets/images/result_5.jpg'
import result_6 from '../../assets/images/result_6.jpg'
import result_7 from '../../assets/images/result_7.jpg'

import React, { useEffect, useState } from 'react';


const ClientsSlider = () => {

    let slideCount
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Функция, которая обновляет значение ширины окна при изменении размера окна
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Добавляем слушателя события изменения размера окна
        window.addEventListener('resize', updateWindowWidth);

        // Убираем слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    if (windowWidth >= 1041) {
        slideCount = 2
    } else {
        slideCount = 1
    }

    return (
        <>
        <div className={s.titleBlock}><span className={s.title}>Таких успіхів досягли мої клієнти</span></div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slideCount}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_1} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_2} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_5} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_6} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.elementWrapper}>
                        {/* <div className={s.elementWrapper__firstPart}>
                            До
                        </div>
                        <div className={s.elementWrapper__secondPart}>
                            Пiсля
                        </div> */}
                        <img className={s.elementWrapper__img} src={result_7} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default ClientsSlider