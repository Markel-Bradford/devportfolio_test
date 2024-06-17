import React from "react";
import "../../App.css";
import "./Projects.css";
import { motion } from "framer-motion";
import styles from "../../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { ref: title, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: project1, inView: project1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName1, inView: projectName1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo1, inView: projectInfo1InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project2, inView: project2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName2, inView: projectName2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo2, inView: projectInfo2InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project3, inView: project3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName3, inView: projectName3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo3, inView: projectInfo3InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project4, inView: project4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName4, inView: projectName4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo4, inView: projectInfo4InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project5, inView: project5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName5, inView: projectName5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo5, inView: projectInfo5InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project6, inView: project6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName6, inView: projectName6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo6, inView: projectInfo6InView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <h1 ref={title} className="projects">
        {" "}
        <span
          className={`${titleInView ? styles.animationFade : styles.hidden}`}>
          Projects
        </span>
      </h1>
      <div ref={ref} className="project-container">
        <div className={`${inView ? styles.animationFade : styles.hidden}`}>
          <h2 className="project-view">
            Please browse and review the projects I've completed and their
            repositories
          </h2>
        </div>
        <div className="project-files">
          <div
            ref={projectName6}
            className={`${
              projectName6InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="project-name-container">
              <a
                className="text-links"
                href="https://mbconverter.onrender.com/"
                target="_blank"
                rel="noreferrer">
                <h3 className="project-name">
                  Global Currency Converter: React, JavaScript, CSS3, REST API
                </h3>
              </a>
              <a
                href="https://github.com/Markel-Bradford/mbconverter"
                target="_blank"
                rel="noreferrer">
                <img
                  className="github"
                  src="/devportfolio/images/github.png"
                  alt="link to Github repository"
                />
              </a>
            </div>
          </div>
          <div
            ref={project6}
            className={`${
              project6InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="thumbnail-wrapper">
              <a
                href="https://mbconverter.onrender.com/"
                target="_blank"
                rel="noreferrer">
                <img
                  id="portfolio-thumbnail"
                  className="thumbnail"
                  src="/devportfolio/images/mbconverter.PNG"
                  alt="My first portfolio"
                />
                <img
                  className="thumbnail-mobile"
                  id="mobile-portfolio"
                  src="/devportfolio/images/IMG_3345.jpg"
                  alt="personal portfolio mobile thumbnail"
                />
              </a>
            </div>
          </div>
          <div
            ref={projectInfo6}
            className={`${
              projectInfo6InView ? styles.animationFade : styles.hidden
            }`}>
            <p className="information">
              The objective of this project was to develop a robust currency
              converter capable of converting any currency by leveraging the
              latest exchange rates from an API. To achieve this, I implemented
              JavaScript functions to fetch, process, and store the exchange
              rate data efficiently. Additionally, I utilized React frameworks
              such as React-Currency-Input-Field and React-Accessible-Accordion
              to enhance the user interface and overall functionality of the
              application.
            </p>
            <p className="information">
              The website's design incorporates both inline CSS and external
              stylesheets to ensure a visually appealing and cohesive layout.
              The web application is fully responsive, catering to various
              screen sizes, and supports both light and dark theme preferences
              for an optimal user experience. This attention to design detail
              ensures a seamless and engaging user experience across different
              devices and viewing conditions.
            </p>
            <p className="information">
              For secure hosting, I deployed the application on Render, ensuring
              that the API operates within a protected virtual environment to
              prevent misuse. This deployment strategy safeguards the integrity
              of the application and its data, providing users with a reliable
              and secure service. Overall, this project highlights my ability to
              integrate external data sources, enhance user interfaces with
              advanced React frameworks, and ensure robust security and
              responsiveness in a web application.
            </p>
          </div>
          <div ref={projectName1}>
            <div
              className={`${
                projectName1InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://mbweatherapp.onrender.com/"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    React Weather App: React, Java Script, CSS3, REST APIs
                  </h3>
                  {/*<h3 className="grade">Grade: A</h3>*/}
                </a>
                <a
                  href="https://github.com/Markel-Bradford/react-weatherapp"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project1}
              className={`${
                project1InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  className="text-links"
                  href="https://mbweatherapp.onrender.com/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="thumbnail"
                    src="/devportfolio/images/weatherapp.png"
                    alt="Weather app create using react, weather, and geo apis"
                  />
                  <img
                    className="thumbnail-mobile"
                    src="/devportfolio/images/IMG_2454.jpg"
                    alt="final project mobile thumbnail"
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo1}
              className={`${
                projectInfo1InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                The primary objective of this project was to develop a
                sophisticated web-based weather application capable of
                retrieving real-time data from REST APIs to provide users with
                comprehensive local weather updates and weekly forecasts.
                Utilizing Axios for asynchronous data fetching, the application
                accurately retrieves location and weather information from the
                OpenWeatherMap API and the Geolocation API. To display the
                weekly forecast, I implemented the React Accessible Accordion
                framework, ensuring an intuitive and seamless user experience
                while handling various HTTP methods, working with specific API
                endpoints, and passing query parameters to fetch the required
                data.
              </p>
              <p className="information">
                To enhance the visual appeal and functionality of the
                application, I meticulously customized the layout using CSS3
                stylesheets, resulting in a visually appealing and user-friendly
                interface. The integration of JavaScript fetch further
                facilitated the seamless retrieval of weather and location data
                from API endpoints, ensuring accurate and up-to-date information
                for the users. Additionally, I implemented robust error handling
                to manage potential issues with API requests, thus maintaining a
                smooth user experience..
              </p>
              <p className="information">
                For deployment, I employed Render to safeguard sensitive API
                keys, thereby maintaining data security and privacy. This
                approach ensured the integrity and confidentiality of the
                application's data sources, providing a secure and reliable user
                experience. Overall, this project showcases my ability to
                integrate and manipulate external data sources in a web
                application, demonstrating my proficiency in working with REST
                APIs and delivering a functional and visually engaging user
                interface.
              </p>
            </div>
            <div
              ref={projectName5}
              className={`${
                projectName5InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/odinprojectfoundations/"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    The Odin Project Foundations: HTML, CSS, JavaScript,
                    Responsive Design
                  </h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/odinprojectfoundations"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project5}
              className={`${
                project5InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  href="https://markel-bradford.github.io/odinprojectfoundations/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="thumbnail"
                    src="/devportfolio/images/topfoundations.png"
                    alt="Homepage for my Odin Project Foundations collection"
                  />
                  <img
                    className="thumbnail-mobile"
                    src="/devportfolio/images/IMG_2450.PNG"
                    alt="tribute page mobile thumbnail"
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo5}
              className={`${
                projectInfo5InView ? styles.animationFade : styles.hidden
              }`}>
              <div>
                <div>
                  <p class="information">
                    The objective of this collection of projects was to
                    reinforce and further develop my understanding of the
                    fundamentals of web development, namely HTML, CSS, and
                    JavaScript. As these form the cornerstone of web
                    development, I deemed it imperative to solidify existing
                    knowledge and augment my skill set.
                  </p>
                  <p class="information">
                    The first project entailed replicating a generic landing
                    page based on a provided image, while infusing it with
                    original content. Opting to design a landing page for a
                    fitness business, I utilized flexbox for creating scalable
                    containers and content, employing solely HTML5 and CSS3 for
                    its realization.
                  </p>
                  <p class="information">
                    The second project involved crafting a simple rock, paper,
                    scissors game, employing JavaScript to manipulate the DOM.
                    In this interactive game, the player engages with a computer
                    opponent, with selections determined randomly from an array
                    of choices. Dynamic frontend updates based on player and
                    computer choices, alongside win condition functions, were
                    implemented, rendering the first player to attain 5 points
                    the winner.
                  </p>
                  <p class="information">
                    For the third project, the challenge was to complete an
                    etch-a-sketch by establishing a scalable grid using flexbox.
                    While CSS Grid could have been utilized, the aim was to
                    reinforce comprehension of flexbox and its practical
                    application. Leveraging JavaScript to manipulate the DOM,
                    the program facilitates the creation of the etch-a-sketch
                    grid layout, with event listeners enabling tile coloring in
                    either black or a randomly generated array of rainbow colors
                    upon mouse interaction.
                  </p>
                  <p class="information">
                    The final project entailed developing a functional
                    calculator capable of executing the four basic mathematical
                    functions. While the project stipulated a simple HTML-based
                    calculator, I opted for a more challenging
                    approach—employing DOM manipulation in JavaScript—to
                    consolidate learnings from prior assignments. Utilizing a
                    similar method as the etch-a-sketch for creating calculator
                    buttons, the program incorporates event listeners for
                    keydown, keyup, and onclick events, alongside arrays and
                    maps for key value creation. Additionally, individual
                    functions were created for each mathematical operation, with
                    switch cases facilitating operation execution.
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={projectName2}
              className={`${
                projectName2InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/WEB121-Final/index.html"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    WEBD121 Final Project: HTML5, CSS3, Java Script, Media Query
                  </h3>
                  <h3 className="grade">Grade: A</h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/WEB121-Final"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project2}
              className={`${
                project2InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/WEB121-Final/index.html"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="thumbnail"
                    src="/devportfolio/images/finalproject.JPG"
                    alt="Final project for WEBD121 class"
                  />
                  <img
                    className="thumbnail-mobile"
                    src="/devportfolio/images/IMG_2448.PNG"
                    alt="final project mobile thumbnail"
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo2}
              className={`${
                projectInfo2InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                For my final project in the Web Development Fundamentals class
                at American Military University, I took on the challenge of
                applying a range of concepts covered throughout the course to
                create a visually appealing website focused on my career
                aspirations in development. This project required me to
                integrate various skills and techniques to develop a functional
                online platform.
              </p>
              <p className="information">
                Using HTML as the foundation and CSS to style each element, I
                aimed to prioritize user experience by creating an intuitive
                interface. Additionally, I incorporated JavaScript
                functionalities to enhance interactivity, including features
                like a scroll-to-top button and animated homepage title. I also
                ensured the design was fully responsive, providing an optimal
                viewing experience on both desktop and mobile devices by using
                flexible grid layouts and media queries.
              </p>
              <p className="information">
                By paying close attention to detail and following best
                practices, I was able to transform theoretical knowledge into a
                polished web development project. The end result is a
                professional, responsive website that reflects my dedication to
                the field of web development and adapts seamlessly to different
                screen sizes and devices.
              </p>
            </div>
            <div
              ref={projectName3}
              className={`${
                projectName3InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/baby-shower-website-template"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    Baby Shower Website Template: ReactJS, JavaScript, HTML5,
                    CSS3
                  </h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/baby-shower-website-template"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project3}
              className={`${
                project3InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/baby-shower-website-template"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="thumbnail"
                    src="/devportfolio/images/babyshowertemp.JPG"
                    alt="Baby shower website template"
                  />
                  <img
                    className="thumbnail-mobile"
                    src="/devportfolio/images/IMG_2447.PNG"
                    alt="baby shower template mobile thumbnail"
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo3}
              className={`${
                projectInfo3InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                This project was born out of my excitement and anticipation for
                a significant life event—the impending arrival of my son. Fueled
                by this anticipation, I channeled my energy into creating a
                personalized website using ReactJS. Motivated by a desire to
                share this experience while respecting privacy, I developed a
                versatile template that users can customize to their own
                preferences.
              </p>
              <p className="information">
                The website features intuitive card components that lead users
                to sections such as location details, a video gallery
                documenting the pregnancy journey, and important links for RSVP
                and registry information. Through the use of ReactJS, I aimed to
                capture the essence of this special moment, ensuring that every
                aspect of the website reflected the joy and preparation
                surrounding the imminent arrival of my son.
              </p>
              <p className="information">
                This project serves as a digital memento, celebrating life's
                cherished milestones while showcasing the power of technology to
                preserve memories for years to come.
              </p>
            </div>
            <div
              ref={projectName4}
              className={`${
                projectName4InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/survey-form/"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">Survey Form: HTML5, CSS3</h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/survey-form"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project4}
              className={`${
                project4InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  href="https://markel-bradford.github.io/survey-form/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="thumbnail"
                    src="/devportfolio/images/SurveyForm.png"
                    alt="survery form"
                  />
                  <img
                    className="thumbnail-mobile"
                    src="/devportfolio/images/IMG_2451.PNG"
                    alt="survey form mobile thumbnail"
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo4}
              className={`${
                projectInfo4InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                Assigned with a project task by FreeCodeCamp, I took on the
                challenge of creating a survey form using HTML and CSS. This
                project aimed to gather feedback from FreeCodeCamp users about
                their developer aspirations, skills, and experiences in a
                user-friendly manner. I carefully crafted the survey questions
                to resonate with the diverse FreeCodeCamp community, ensuring
                that each query was relevant and accessible.
              </p>
              <p className="information">
                The focus was on simplicity and ease of use, allowing users to
                input their responses effortlessly across all fields of the
                form. Once completed, users could submit their feedback
                seamlessly, enabling the collection of valuable insights to
                inform future improvements within the developer community.
              </p>
              <p className="information">
                This project highlighted the importance of user-centered design
                and effective data collection methods, demonstrating my ability
                to translate conceptual requirements into a functional survey
                platform using HTML and CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;