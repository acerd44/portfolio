import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container py-4">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-6 text-white">
                        <h5 className="text-white">Made by Hossén Rahimzadegan</h5>
                        <p>Email: hossenrahimzadegan@gmail.com</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-5 social-icons">
                        <Link to="https://github.com/acerd44/" className="social-icon"><i className="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/hoss%C3%A9n-rahimzadegan-93b1ab196/" className="social-icon"><i className="fab fa-linkedin"></i></Link>
                        <a href="mailto:hossenrahimzadegan@gmail.com" className="social-icon"><i className="fa fa-envelope"></i></a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer