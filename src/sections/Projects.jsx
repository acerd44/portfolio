import React, { useEffect, useState } from 'react'

const Projects = () => {
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
                <h2 className="mb-5">Projects</h2>
                {
                    projects.map((project, index) => (
                        <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{project.projectName}</h3>
                                <a href={project.link} className='project-link'><h4 className="subheading mt-1 project-link">Github Link</h4></a>
                                {project.demoLink != null && (
                                    <a href={project.demoLink} className='project-link'><h4 className="subheading mt-1 project-link">Demo</h4></a>

                                )}
                                <div className="subheading mb-3">{project.techStack}</div>
                                <p>{project.description}</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{project.date}</span></div>
                        </div>

                    ))
                }
            </div>
        </section>
    )
}

export default Projects