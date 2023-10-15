import s from './mainSection.module.css'
import { Link, Element } from 'react-scroll';

const MainSection = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__window}>
                <div className={s.wrapper__window__content}>
                    <span className={s.wrapper__window__content__main}>Досягніть своїх цілей разом зі мною!</span>
                    <span className={s.wrapper__window__content__description}>Перетворіть своє тіло на зброю: приєднуйтесь до моєї команди і досягніть кращої форми життя!</span>
                    <Link to="FormatsSection" spy={true} smooth={true} duration={500}><button className={s.wrapper__window__content__button}>Замовити програму</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MainSection