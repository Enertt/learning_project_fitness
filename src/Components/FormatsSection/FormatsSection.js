import s from './formatsSection.module.css'
import foodImg from '../../assets/images/food_scale_2.jpg'
import online from '../../assets/images/image.psd (1).jpg'
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

                <div className={inView ? s.wrapper__content__cardsBlock2 : s.wrapper__content__cardsBlock__hidden}>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={foodImg} />
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Створення раціону харчування»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для схуднення</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для набору</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-для людей з порушеннями</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>2499 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>

                    </div>
                </div>

                <div ref={ref} className={inView ? s.wrapper__content__cardsBlock : s.wrapper__content__cardsBlock__hidden}>

                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={trainer} />
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Фiтнес наставництво»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-як себе правильно продати</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-онлайн-тренінг: як організувати цей процес</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-як вийти на дохід в 2500$ в місяць</span>

                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>11999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>

                    </div>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={online} />
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-консультація»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-як правильно вистроїти i вирахувати навантаження в тренуваннях з пауерліфтингу</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-на будь яку тему, яка стосується тренувань i харчування</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-відновлення</span>
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>

                    </div>
                    <div className={s.wrapper__content__cardsBlock__card}>
                        <div className={s.wrapper__content__cardsBlock__card__imgBlock}>
                            <img className={s.wrapper__content__cardsBlock__card__imgBlock__img} src={body} />
                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__textBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__spanTitle}>«Онлайн-ведення»</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-досконало підібрана під вас система тренувань</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-все підкріплено відео</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-звʼязок з вами 24/7</span>
                            <span className={s.wrapper__content__cardsBlock__card__spanDescription}>-підібрана система харчування для досягнення цілі</span>

                        </div>
                        <div className={s.wrapper__content__cardsBlock__card__orderBlock}>
                            <span className={s.wrapper__content__cardsBlock__card__orderBlock__cost}>999 грн.</span>
                            <button className={s.wrapper__content__cardsBlock__card__orderBlock__button}>Замовити</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormatsSection