import s from './aboutMe.module.css'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'

const AboutMe = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <span className={s.wrapper__content__spanTitle}>Моя професійна біографія</span>
                <div className={s.wrapper__content__textBlock}>
                    <div className={s.wrapper__content__textBlock_img1}><img src={about1} /></div>
                    
                    <p className={s.wrapper__content__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Enim blandit volutpat maecenas volutpat blandit aliquam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci a scelerisque purus semper eget. Potenti nullam ac tortor vitae purus faucibus ornare. Nec ullamcorper sit amet risus nullam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Aenean pharetra magna ac placerat vestibulum. Consequat mauris nunc congue nisi vitae. Nisl pretium fusce id velit ut tortor. Morbi blandit cursus risus at ultrices mi tempus. Purus sit amet volutpat consequat mauris nunc congue.</p>
                    <div className={s.wrapper__content__textBlock_img2}><img src={about2} /></div>
                    
                    <p className={s.wrapper__content__textBlock__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Enim blandit volutpat maecenas volutpat blandit aliquam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci a scelerisque purus semper eget. Potenti nullam ac tortor vitae purus faucibus ornare. Nec ullamcorper sit amet risus nullam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Aenean pharetra magna ac placerat vestibulum. Consequat mauris nunc congue nisi vitae. Nisl pretium fusce id velit ut tortor. Morbi blandit cursus risus at ultrices mi tempus. Purus sit amet volutpat consequat mauris nunc congue.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe  