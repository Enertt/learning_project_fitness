import s from './main.module.css'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import SecondHeader from '../SecondHeader/SecondHeader'

const Main = () => {
    return(
        <div className={s.wrapper}>
            <Header />
            <SecondHeader />
            <MainSection />
        </div>
    )
}

export default Main