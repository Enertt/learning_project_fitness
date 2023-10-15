import s from './reviews.module.css'
import messageImgLBig from '../../assets/images/message.png'
import messageImgRSmall from '../../assets/images/messageR_Small.png'
import messageImgRBig from '../../assets/images/messageR.png'
import messageImgLSmall from '../../assets/images/messageL_Small.png'

const Reviews = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__span}>Відгуки клієнтів</span>
                <div className={s.wrapper__content_rewiewBlock}>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div className={s.wrapper__content_rewiewBlock__layer_BigL}>
                            <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Андрiй</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className={s.wrapper__content_rewiewBlock__layer_SmallR}>
                            <img src={messageImgRSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Нiкiта</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div className={s.wrapper__content_rewiewBlock__layer_SmallL}>
                            <img src={messageImgLSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Дмитро</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className={s.wrapper__content_rewiewBlock__layer_BigR}>
                            <img src={messageImgRBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Олена</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div className={s.wrapper__content_rewiewBlock__layer_BigL}>
                            <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Євгенiй</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className={s.wrapper__content_rewiewBlock__layer_SmallR}>
                            <img src={messageImgRSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Семен</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews