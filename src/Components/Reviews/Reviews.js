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
                        <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                        <img src={messageImgRSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <img src={messageImgLSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                        <img src={messageImgRBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                    </div>
                    <div className={s.wrapper__content_rewiewBlock__layer}>
                        <img src={messageImgLBig} className={s.wrapper__content_rewiewBlock__layer_imgBig}/>
                        <img src={messageImgRSmall} className={s.wrapper__content_rewiewBlock__layer_imgSmall}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews