import s from './formatsSection.module.css'
import foodImg from '../../assets/images/food_scale_2.jpg'
import online from '../../assets/images/online.jpg'
import body from '../../assets/images/image_body.jpg'
import trainer from '../../assets/images/trainer.jpg'
import { useInView } from 'react-intersection-observer';


const FormatsSection = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Виберіть свій формат</span>

                <div ref={ref} className={inView ? s.wrapper__content__cardsBlock2 : s.wrapper__content__cardsBlock__hidden}>

                    <div className={s.wrapper__content__cardsBlock2__card}>
                         {/* <div className={s.wrapper__content__cardsBlock2__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock2__card__imgBlock__img} src={body} />
                        </div> (картинка) */}
                         <div className={s.wrapper__content__cardsBlock2__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock2__card__spanTitle}>«Онлайн-ведення»</span>
                            <span className={s.wrapper__content__cardsBlock2__card__spanDescription}>-досконало підібрана під вас система тренувань</span>
                            <span className={s.wrapper__content__cardsBlock2__card__spanDescription}>-все підкріплено відео</span>
                            <span className={s.wrapper__content__cardsBlock2__card__spanDescription}>-звʼязок з вами 24/7</span>
                            <span className={s.wrapper__content__cardsBlock2__card__spanDescription}>-підібрана система харчування для досягнення цілі</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock2__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock2__card__orderBlock__cost}>1999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock2__card__orderBlock__button}>Замовити</button>
                        </div>
                    </div>
                </div>  


                <div className={inView ? s.wrapper__content__cardsBlock : s.wrapper__content__cardsBlock__hidden}>

                    <div className={s.wrapper__content__cardsBlock__card}>
                        {/* <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={trainer} />
                        </div> */}
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-ведення»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-досконало підібрана під вас система тренувань</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-все підкріплено відео</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-звʼязок з вами 24/7</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-підібрана система харчування для досягнення цілі</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>1999 грн.</span>
                            <form action="https://docs.google.com/forms/d/e/1FAIpQLScOj0UhaadeLIoU9dqP5nz89SPpnuhJNhN2LCWp9rN_S0GZxA/viewform?usp=sf_link" target="_blank">
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                            </form>
                        </div>
                    </div>

                    <div className={s.wrapper__content__cardsBlock__card}>
                        {/* <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={online} />
                        </div> */}
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-консультація»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-як правильно вистроїти i вирахувати навантаження в тренуваннях з пауерліфтингу</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-на будь яку тему, яка стосується тренувань i харчування</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-відновлення</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <form action="https://docs.google.com/forms/d/e/1FAIpQLSdlxVvErSsO8LZOwOltOnLCXix6pEHROeKZyuzAavuvoLa-zA/viewform?usp=sf_link" target="_blank">
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                            </form>
                        </div>
                    </div>

                    <div className={s.wrapper__content__cardsBlock__card}>
                        {/* <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={foodImg} />
                        </div> */}
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Створення раціону харчування»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для схуднення</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для набору</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для людей з порушеннями</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <form action="https://docs.google.com/forms/d/e/1FAIpQLSdwqDd9XHWL9059x9IjQrR7oXzFnFwvUr75zQ0QhMwUk0Z56A/viewform?usp=sf_link" target="_blank">
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormatsSection