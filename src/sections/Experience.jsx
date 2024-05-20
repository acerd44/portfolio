import React from 'react'

const Experience = () => {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Erfarenhet</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5 border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Videokodare</h3>
                        <div className="subheading mb-3">Randstad/Postnord</div>
                        <p>
                            Jag arbetade på ett kontor vid en dator och hanterade 2000-3000 paket/brev/försändelser per timme.
                            Mitt jobb var att se till att de skickades till rätt adress. Om det inte fanns någon adress, skulle jag mata in postnumret och om inte det, orten eller staden.
                            Ibland fanns det internationella försändelser, i så fall skulle vi bara kategorisera dem.
                        </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 September - 2020 May</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between border border-3 rounded p-3 border-secondary">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Studier & arbete</h3>
                        <div className="subheading mb-3">Rinkeby-Kista SDF</div>
                        <p>
                            Jobbet handlade om att hjälpa personer mellan 16 och 29 år som vill börja studera eller arbeta men har svårt att komma igång.
                            Det bestod i att gå ut i Rinkeby-Kista och dela ut flygblad som bjöd in till våra aktiviteter där folk kunde lära sig att skriva ett bra CV eller vad man ska och inte ska göra på intervjuer.
                            Jag arbetade främst med deras PowerPoint-presentationer och hjälpte till med presentationen på laptopen, ibland gjorde jag också undersökningar.
                        </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 Juni - 2019 Juli</span></div>
                </div>
            </div>
        </section>
    )
}

export default Experience