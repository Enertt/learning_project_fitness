import s from './main.module.css'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'
import SecondHeader from '../SecondHeader/SecondHeader'
import FormatsSection from '../FormatsSection/FormatsSection'
import Tagline from '../Tagline/Tagline'
import Reviews from '../Reviews/Reviews'
import CoachesFormats from '../СoachesFormats/СoachesFormats'
import Footer from '../Footer/footer'
import AboutMe from '../AboutMe/AboutMe'
import { Link, Element } from 'react-scroll';
import OrderForm from '../OrderForm/OrderForm'
import { useState } from 'react'


const Main = () => {
    const [formState, setFormState] = useState(false)
    return(
        <div className={s.wrapper}>
            {formState && (<OrderForm setFormState={setFormState}/>)}
            <Header />
            {/* <SecondHeader /> */}
            <MainSection/>
            <Element name="Tagline"></Element>
            <Tagline />
            <Element name="FormatsSection"></Element>
            <FormatsSection setFormState={setFormState}/>
            <Element name="Reviews"></Element>
            <Reviews />
            <Element name="CoachesFormats"></Element>
            <CoachesFormats setFormState={setFormState}/>
            <Element name="AboutMe"></Element>
            <AboutMe />
            <Element name="Footer"></Element>
            <Footer />
        </div>
    )
}

export default Main