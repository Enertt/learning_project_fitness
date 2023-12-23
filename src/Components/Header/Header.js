import s from './header.module.css'
import logo from '../../assets/images/logoW (1).png'
import { Link, Element } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [burgerState, setBurgerState] = useState(false)

  // Функция-обработчик изменения размера окна
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                {windowWidth > 1100 ? (
                    <div className={s.wrapper__content__info}>
                        <Link to="Tagline" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Клієнти</span></Link>
                        <Link to="FormatsSection" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Послуги</span></Link>
                        <Link to="Reviews" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Вiдгуки</span></Link>
                        {/* <Link to="CoachesFormats" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Для тренерiв</span></Link> */}
                        <Link to="AboutMe" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Про себе</span></Link>
                        <Link to="Footer" spy={true} smooth={true} duration={500}><span className={s.wrapper__content__info__span}>Контакти</span></Link>
                    </div>
                ) : (
                    <div className={s.wrapper__content__info} onClick={()=>{setBurgerState(!burgerState)}}>
                        <svg className={s.wrapper__content__info__svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                )}
                {burgerState && (
                    <div className={s.navWindow}>
                        <div className={s.navWindow__content}>
                            <div className={s.navWindow__content__itemClose} onClick={()=>{setBurgerState(!burgerState)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>

                            <Link to="Tagline" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Клієнти</div></Link>
                            <Link to="FormatsSection" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Послуги</div></Link>
                            <Link to="Reviews" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Вiдгуки</div></Link>
                            {/* <Link to="CoachesFormats" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Для тренерiв</div></Link> */}
                            <Link to="AboutMe" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Про себе</div></Link>
                            <Link to="Footer" spy={true} smooth={true} duration={500}><div className={s.navWindow__content__item} onClick={()=>{setBurgerState(!burgerState)}}>Контакти</div></Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Header