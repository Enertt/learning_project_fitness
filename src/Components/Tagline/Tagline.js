import s from './tagline.module.css'
import ClientsSlider from '../ClientsSlider/ClientsSlider'

const Tagline = () => {
    return(
        <section className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content__titleBlock}>
                    <span className={s.wrapper__content__spanTitle}>Хочеш побудувати тіло своєї мрії, чи піднятися на вершину у спотривній кар'єрі?</span>
                    <span className={s.wrapper__content__spanTitle2}>Я допоможу тобі!</span>
                </div>
                <div className={s.wrapper__content__swiperBlock}>
                    <ClientsSlider />
                </div>
            </div>
            
        </section>
    )
}

export default Tagline