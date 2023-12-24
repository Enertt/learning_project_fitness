import s from './aboutMe.module.css'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'

const AboutMe = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Моя професійна біографія</span>
                <div className={s.wrapper__content__textBlock}>
                    <div className={s.wrapper__content__textBlock_img1}><img src={about2} /></div>
                    
                    <p className={s.wrapper__content__textBlock__p}>Діючий спортсмен і МСМК (ПРО) з пауерліфтингу. Чотирикратний чемпіон України з пауерліфтингу в 2017, 2018, 2020 і 2021 роках, а також чемпіон України з тяги Акселя (стронгмен) в 2023 році. Спеціалізується на загальній фізичній підготовці, зниженні ваги, наборі мʼязової маси та лікувальній фізичній культурі (ЛФК). Має вищу педагогічну освіту з фізичного виховання і спорту.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe  