import s from './secondHeader.module.css'
import logo from '../../assets/images/logo.png'

const SecondHeader = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content__logo}>
                    <img className={s.wrapper__content__logo__img} src={logo} />

                    <div className={s.wrapper__content__logo__name}>
                        <span className={s.wrapper__content__logo__name__span}>Сергiй</span>
                        <span className={s.wrapper__content__logo__name__span}>Склярук</span>
                    </div>
                </div>
                <div className={s.wrapper__content__info}>
                    <span className={s.wrapper__content__info__span}>Україна, м. Чернігів</span>
                    <span className={s.wrapper__content__info__span}>+38 (050) 234 23</span>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader