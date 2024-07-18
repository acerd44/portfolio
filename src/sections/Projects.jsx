import React, { useEffect, useState } from 'react'

const Projects = () => {
    const projectOneIcons = ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", "https://static-00.iconduck.com/assets.00/dot-net-plain-wordmark-icon-512x468-lj2malng.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-plain-wordmark.svg"]
    const projectTwoIcons = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"]

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            const response = await fetch('https://hossenportfolioapi.azurewebsites.net/api/projects/')
            const data = await response.json()
            setProjects(data)
        } catch (e) {
            console.error('Error fetching:', e)
        }
    }
    return (
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">Portfölj</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5 border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Bank Administration Web Application with a Web API and console app</h3>
                        <img className="project-image" src="https://i.imgur.com/TRvcPUz.png" width="" />
                        <a href="https://github.com/acerd44/BankApplication" className='project-link'><h4 className="subheading mt-1 project-link">Github Link</h4></a>
                        {/* <a href="https://hossenbank.azurewebsites.net/" className='project-link'><h4 className="subheading mt-1 project-link">Demo (Refresh if it doesn't load)</h4></a> */}
                        <h4 className="subheading mt-1 project-link">Demo is currently not available, a video about it will be uploaded soon.</h4>
                        {projectOneIcons.map((icon, index) => (
                            <img key={index} src={icon} height="75" />
                        ))}
                        <p className="pt-3">This web application offers a range of features for managing customers, accounts, and users (both admins and cashiers), all designed with a user-friendly interface based on Bootstrap template. It also includes a Web API for checking customer info and transaction lists and a Console App checking for suspicious transactions. </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2024-05-01</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5 border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Silicon Project</h3>
                        <img className="project-image" src="https://i.imgur.com/6H0hcF8.png" width="" />
                        <a href="https://github.com/acerd44/siliconproject" className='project-link'><h4 className="subheading mt-1 project-link">Github Link</h4></a>
                        <a href="https://acerd44.github.io/siliconproject/" className='project-link'><h4 className="subheading mt-1 project-link">Demo (Refresh if it doesn't load)</h4></a>
                        {projectTwoIcons.map((icon, index) => (
                            <img key={index} src={icon} height="75" />
                        ))}
                        <p className="pt-3">A website designed from scratch with the help of some screenshots and a figma file. It is partially incomplete and only has a main page and a contact page.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2024-03-14</span></div>
                </div>
            </div>
        </section>
    )
}

export default Projects