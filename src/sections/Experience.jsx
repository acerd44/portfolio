import React from 'react'

const Experience = () => {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Typer/Assurance/Reviewer</h3>
                        <div className="subheading mb-3">Randstad/Postnord</div>
                        <p>I worked in an office on a computer and would go through 2000-3000 packages/letters/parcels an hour. My job was to make sure they were being sent to the correct address.
                            If there was no address, I would input the ZIP code and if not that then the county or city. Sometimes there were international parcels in which case we would just categorize them.
                        </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 September - 2020 May</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Studier & arbete</h3>
                        <div className="subheading mb-3">Rinkeby-Kista SDF</div>
                        <p>The job was about helping people between the ages of 16 and 29 who want to start studying or working but have problems starting out.
                            It consisted of going out in Rinkeby-Kista, putting out fliers that invited to our activities where people could learn how to write a good CV or what to do and not to do in interviews.

                            I mainly worked on their powerpoints and helped with the presentation on the laptop, sometimes I made surveys.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 July - 2019 June</span></div>
                </div>
            </div>
        </section>
    )
}

export default Experience