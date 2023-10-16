import s from './main.module.css'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import SecondHeader from '../SecondHeader/SecondHeader'
import FormatsSection from '../FormatsSection/FormatsSection'
import Tagline from '../Tagline/Tagline'
import Reviews from '../Reviews/Reviews'
import CoachesFormats from '../СoachesFormats/СoachesFormats'
import { Link, Element } from 'react-scroll';


const Main = () => {
    
    return(
        <div className={s.wrapper}>
            <Header />
            {/* <SecondHeader /> */}
            <MainSection />
            <Element name="Tagline"></Element>
            <Tagline />
            <Element name="FormatsSection"></Element>
            <FormatsSection />
            <Element name="Reviews"></Element>
            <Reviews />
            <Element name="CoachesFormats"></Element>
            <CoachesFormats />
        </div>
    )
}

export default Main