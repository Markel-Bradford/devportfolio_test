import React from 'react';
import '../../App.css';
import './Contact.css';
import { motion } from 'framer-motion';
import styles from '../../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";

function Contact(){
    const { ref:title, inView: titleInView} = useInView({
        triggerOnce: true
      });

    return (
       <motion.div
       initial={{ opacity:  0}}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}> 
        <h1 className='contact'><span ref={title} className={`${titleInView ? styles.animationFade : " "}`}>Contact Me</span></h1>
<div className='contact-container'>
            <h2 className='contact-methods'>Please feel free to connect with me via LinkedIn or e-mail!</h2>
</div>
    <div className='contact-img'>
        <div className='contact-wrapper'>
        <a href="mailto:markel.bradford94@gmail.com">
            <img className="icon" src="/devportfolio/images/contact2.jpg" alt="Email me"/>                
            </a>
         <a href="https://www.linkedin.com/in/markel-bradford-1773a9236">
            <img className="icon" src="/devportfolio/images/contact1.jpg" alt="My LinkedIn Profile"/>
            </a>
        </div>
</div>
        </motion.div>
    );
}

export default Contact