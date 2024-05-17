import React from 'react'

const Education = () => {
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">KYH Vocational University</h3>
                        <div className="subheading mb-3">.NET Developer</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2023 August - 2025 June</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Thorildsplangymnasium</h3>
                        <div className="subheading mb-3">Information and media technology</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2018 August - 2021 June</span></div>
                </div>
            </div>
        </section>
    )
}

export default Education