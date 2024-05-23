import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <section className="resume-section vh-100" id="about">
            <div className="resume-section-content ">
                <h1 className="mb-0">
                    Hossén <br />Rahimzadegan
                </h1>
                <h4 className="h3 text-dark">LIA sökande .NET Utvecklare</h4>
                <div className="subheading mb-5 ">
                    <a href="mailto:hossenrahimzadegan@gmail.com">hossenrahimzadegan@gmail.com</a>
                </div>
                <p className="lead mb-5">Jag arbetar med .NET-ramverket med ett fokus på backendutveckling, men jag behärskar även frontendutveckling.
                    Med en passion för att lösa komplexa problem och skapa effektiva, skalbara lösningar, strävar jag alltid efter att leverera mjukvara av hög kvalitet.
                    Jag är engagerad i att ständigt lära mig nya teknologier och förbättra mina färdigheter för att bli en ännu bättre utvecklare.</p>
                <div className="social-icons">
                    <Link to="https://github.com/acerd44/" className="social-icon"><i className="fab fa-github"></i></Link>
                    <Link to="https://www.linkedin.com/in/hoss%C3%A9n-rahimzadegan-93b1ab196/" className="social-icon"><i className="fab fa-linkedin"></i></Link>
                    <a href="mailto:hossenrahimzadegan@gmail.com" className="social-icon"><i className="fa fa-envelope"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About