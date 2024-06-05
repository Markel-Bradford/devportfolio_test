import React from 'react'
import Carditems from './Carditems'
import './Cards.css'
import styles from '../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";


function Cards() {
  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0
  });
  const { ref: cards, inView: cardsInView} = useInView({
    triggerOnce: true,
    threshold: 0
  });

  return (
    <div className='cards'>
      <div ref={ref}>
        <h1  className={`${inView ? styles.animationFade : styles.hidden}`}>Learn more about me and my projects!</h1>
        </div>
          <div ref={cards} className={`${styles.cardsContainer}`}>
            <div className={`${styles.cardsWrapper} ${ cardsInView ? styles.animationFade : styles.hidden}`}>
                <ul className='cardsItems'>
                <Carditems src='/devportfolio/images/DSC06958.JPG' text="Hi, my name is Markel Bradford, and I am an aspiring front-end developer!" label='About Me' path='/about-me' />
                <Carditems src='/devportfolio/images/SurveyForm.png' text='Please take a look at the projects that I have completed.' label='My Projects' path='/projects' />
                <Carditems className='contact-me' src='/devportfolio/images/contact.jpg' text='Connect with me on LinkedIn or via email!' label='Contact Me' path='/contact' />
                </ul>
            </div>
          </div>    
    </div>
  )
}

export default Cards;
