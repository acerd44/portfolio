import React, { useEffect } from 'react'
import ProfilePicture from './../assets/picture.jpg'
import CV from './../assets/cv.pdf'

const NavBar = () => {
    useEffect(() => {
        const sideNav = document.querySelector('#sideNav');
        if (sideNav) {
            new window.bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                rootMargin: '0px 0px -40%',
            });
        }

        const navbarToggler = document.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.forEach((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });

        return () => {
            responsiveNavItems.forEach((responsiveNavItem) => {
                responsiveNavItem.removeEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });
        };
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Hossén Rahimzadegan</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ProfilePicture} /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About Me</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="mailto:hossenrahimzadegan@gmail.com">Contact Me</a></li>
                    <li className="nav-item"><a className="nav-link" href={CV} download="Hossén Rahimzadegan - CV">Download CV</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar