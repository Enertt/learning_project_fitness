import s from './formatsSection.module.css'
import foodImg from '../../assets/images/food_scale_2.jpg'
import online from '../../assets/images/image.psd (1).jpg'
import body from '../../assets/images/image_body.jpg'
import { useInView } from 'react-intersection-observer';


const FormatsSection = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });

    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Виберіть свій формат</span>
                <div ref={ref} className={inView ? s.wrapper__content__cardsBlock : s.wrapper__content__cardsBlock__hidden}>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={foodImg}/>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Створення раціону харчування»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>
                        
                    </div>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={online}/>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-консультація»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>
                        
                    </div>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={body}/>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-ведення»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                            
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>2499 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormatsSection