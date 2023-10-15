import s from './header.module.css'
import logo from '../../assets/images/logoW (1).png'

const Header = () => {
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
                    <span className={s.wrapper__content__info__span}>Клієнти</span>
                    <span className={s.wrapper__content__info__span}>Послуги</span>
                    <span className={s.wrapper__content__info__span}>Мiй досвiд</span>
                    <span className={s.wrapper__content__info__span}>Локалiзацiя</span>
                </div>
            </div>
        </div>
    )
}

export default Header