import s from './aboutMe.module.css'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'

const AboutMe = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Моя професійна біографія</span>
                <div className={s.wrapper__content__textBlock}>
                    <div className={s.wrapper__content__textBlock_img1}><img src={about1} /></div>
                    
                    <p className={s.wrapper__content__textBlock__p}>
                    - Діючий спортсмен.
                    - МСМК (ПРО) з пауерліфтингу.
                    - Чотирикратний чемпіон України з пауерліфтингу 2017; 2018; 2020; 2021 року.
                    - Чемпіон України з тяги Акселя (стронгмен) 2023 року.
                    </p>
                    <div className={s.wrapper__content__textBlock_img2}><img src={about2} /></div>
                    
                    <p className={s.wrapper__content__textBlock__p}><h8>Спеціалізація:</h8><p>- Загальна фізична підготовка.</p> <p>- Зниження ваги.</p><p>- Набір мʼязової маси⁣.</p><p>- ЛФК⁣.</p>⁣- Вища освіта педагогічна, факультет фізичного виховання і спорту. ⁣⁣⠀
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe  