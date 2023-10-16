import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'


//document.getElementById("myElement").innerHTML = text;
// const spacing = 10;
// const marginRightStyle = `${spacing}em`;
// const mapSection = { marginRight: marginRightStyle };

const Footer = () => {
    return (
         <div className={styles.footerWrapper}>

            <div className={styles.footerContent}>
                 <div className={styles.content}>
                        <div className={styles.addres}>

                                <div className={styles.addresName}>Контакти</div>

                           <p>Ви можете зв'язатися зі мною будь-яким зручним способом</p>
                           <p>г.Чернігів, вул. Милорадовичів, 55</p>
                           <p>sergei@gmail.com</p>
                           <p>+38(093)111 11 11</p><br></br>
                        </div>

                        <div className={styles.mapSection}>
                       
                                {/* <iframe  
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6310283164034!2d31.317104175961248!3d51.50163811112511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5495f10c6fcf5%3A0xc6223267ef467cfe!2sUNDERGROUND%20fitness%20%26%20fight!5e0!3m2!1sru!2spl!4v1697244536426!5m2!1sru!2spl"
                                    width="600" 
                                    height="450" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy"                                     
                                    referrerpolicy="no-referrer-when-downgrade" 
                                >
                                </iframe>  */}
                                
                            
                        </div>                     

                 </div>
            </div>

         </div>
    )
}

export default Footer