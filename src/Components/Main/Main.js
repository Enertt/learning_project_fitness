import s from './main.module.css'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import SecondHeader from '../SecondHeader/SecondHeader'
import FormatsSection from '../FormatsSection/FormatsSection'
import Tagline from '../Tagline/Tagline'
import Reviews from '../Reviews/Reviews'

const Main = () => {
    return(
        <div className={s.wrapper}>
            <Header />
            {/* <SecondHeader /> */}
            <MainSection />
            <Tagline />
            <FormatsSection />
            <Reviews />
        </div>
    )
}

export default Main