import React from 'react';
import '../../App.css';
import './Contact.css';
import styles from '../../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";

function Contact(){
    const { ref:title, inView: titleInView} = useInView({
        triggerOnce: true
      });

      const { ref:subtitle, inView: subtitleInView} = useInView({
        triggerOnce: true
      });

      const { ref:pics, inView: picsInView} = useInView({
        triggerOnce: true
      });

    return (
       <div
       id='contact'>
        <div className="filler2"></div> 
        <h1 className='contact'><span ref={title} className={`${titleInView ? styles.animationFade : " "}`}>Contact Me</span></h1>
<div className='contact-container'>
            <h2 className='contact-methods'><span ref={subtitle} className={`${subtitleInView ? styles.animationFade : " "}`}>Please feel free to connect with me via LinkedIn or e-mail!</span></h2>
</div>
    <div className='contact-img'>
        <div ref={pics} className={`${picsInView ? styles.animationFade : " "}`}>
        <div className='contact-wrapper'>
        <a href="mailto:markel.bradford94@gmail.com">
            <img className="icon" src="/devportfolio/images/contact2.jpg" alt="Email me"/>                
            </a>
         <a href="https://www.linkedin.com/in/markel-bradford-1773a9236">
            <img className="icon" src="/devportfolio/images/contact1.jpg" alt="My LinkedIn Profile"/>
            </a>
            </div>
        </div>
</div>
        </div>
    );
}

export default Contact