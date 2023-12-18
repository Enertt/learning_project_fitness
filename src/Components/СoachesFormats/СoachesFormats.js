import s from './coachesFormats.module.css'
import Img from '../../assets/images/for_coaches.png'
import { useInView } from 'react-intersection-observer';

const CoachesFormats = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Програма для тренерiв</span>
                <div ref={ref} className={inView ? s.wrapper__content__cardsBlock : s.wrapper__content__cardsBlock__hidden}>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={Img} />
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Досягнення щомісячного доходу в розмірі 2500 доларів»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму пункт який описує програму</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-пункт який описує програму</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>9999 грн.</span>
                            <button onClick={()=>{props.setFormState(true)}} className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoachesFormats