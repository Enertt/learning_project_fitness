import s from './reviews.module.css'
import messageImgLBig from '../../assets/images/message.png'
import messageImgRSmall from '../../assets/images/messageR_Small.png'
import messageImgRBig from '../../assets/images/messageR.png'
import messageImgLSmall from '../../assets/images/messageL_Small.png'
import { useInView } from 'react-intersection-observer';

const Reviews = () => {

    const [ref1, inView1] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    const [ref4, inView4] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    const [ref5, inView5] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });
    const [ref6, inView6] = useInView({
        triggerOnce: true, // Запустить анимацию только один раз
    });

    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__span}>Відгуки клієнтів</span>
                <div className={s.wrapper__content_rewiewBlock}>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div ref={ref1} className={inView1 ? s.wrapper__content_rewiewBlock__layer_BigL : s.message_hidden}>
                            <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Андрiй</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div ref={ref2} className={inView2 ? s.wrapper__content_rewiewBlock__layer_SmallR : s.message_hidden}>
                            <img src={messageImgRSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Нiкiта</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div ref={ref3} className={inView3 ? s.wrapper__content_rewiewBlock__layer_SmallL : s.message_hidden}>
                            <img src={messageImgLSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Дмитро</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div ref={ref4} className={inView4 ? s.wrapper__content_rewiewBlock__layer_BigR : s.message_hidden}>
                            <img src={messageImgRBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Олена</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <div ref={ref5} className={inView5 ? s.wrapper__content_rewiewBlock__layer_BigL : s.message_hidden}>
                            <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                            <div className={s.wrapper__content_rewiewBlock__layer__textBlock}>
                                <span className={s.wrapper__content_rewiewBlock__layer__textBlock__span}>Євгенiй</span>
                                <p className={s.wrapper__content_rewiewBlock__layer__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div ref={ref6} className={inView6 ? s.wrapper__content_rewiewBlock__layer_SmallR : s.message_hidden}>
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