import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Hossén <br />Rahimzadegan
                </h1>
                <div className="subheading mb-5">
                    <a href="mailto:hossenrahimzadegan@gmail.com">hossenrahimzadegan@gmail.com</a>
                </div>
                <p className="lead mb-5">I am a passionate student currently learning the .NET Framework, with a strong focus on backend development.
                    While backend development is my specialty, I am also proficient in frontend technologies, enabling me to create full-stack applications.
                    My journey in software development is driven by a love for solving complex problems and building efficient, scalable solutions.
                    I am always eager to learn new technologies and improve my skills to deliver high-quality software.</p>
                <div className="social-icons">
                    <Link to="https://github.com/acerd44/" className="social-icon"><i className="fab fa-github"></i></Link>
                    <Link to="https://www.linkedin.com/in/hoss%C3%A9n-rahimzadegan-93b1ab196/" className="social-icon"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>
        </section>
    )
}

export default About