import React from 'react'

const Education = () => {
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Utbildning</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5 border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">KYH Yrkeshögskola</h3>
                        <div className="subheading mb-3">.NET Utvecklare</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2023 Augusti - 2025 Juni</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Thorildsplangymnasium</h3>
                        <div className="subheading mb-3">Information- och medieteknik</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2018 Augusti - 2021 Juni</span></div>
                </div>
            </div>
        </section>
    )
}

export default Education