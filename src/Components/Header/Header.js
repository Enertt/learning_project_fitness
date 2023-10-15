import s from './header.module.css'
import logo from '../../assets/images/logoW (1).png'
import { Link, Element } from 'react-scroll';

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
                    <Link to="Tagline" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Клієнти</span></Link>
                    <Link to="FormatsSection" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Послуги</span></Link>
                    <Link to="Reviews" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Вiдгуки</span></Link>
                    <Link to="CoachesFormats" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Для тренерiв</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header