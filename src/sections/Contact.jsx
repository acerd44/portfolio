import React, { useState } from 'react'

const Contact = () => {
    const [honeyPotCheck, setHoneyPotCheck] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (honeyPotCheck) {
            console.log("Spam detected")
            return;
        }
        let showValidationErrors = true;
        if (!e.target.checkValidity()) {
            e.stopPropagation()
            showValidationErrors = true;
        } else {
            showValidationErrors = false;
            const contactForm = {
                fullname: e.target['fullname'].value,
                email: e.target['email'].value,
                subject: e.target['subject'].value,
                message: e.target['message'].value
            }
            fetch('https://formspree.io/f/mayrzwbk', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(contactForm)
            })
                .then(res => {
                    if (res.ok) {
                        alert("Your message has been sent, thanks for contacting me!")
                        e.target.reset()
                    }
                })
        }
        if (showValidationErrors)
            e.target.classList.add('was-validated')
    }
    return (
        <section className="resume-section" id="contact">
            <div className="resume-section-content">
                <h2 className="mb-4">Kontakta Mig</h2>
                <div className="d-flex flex-column row justify-content-between">
                    <form action="https://formspree.io/f/mayrzwbk" onSubmit={handleSubmit} className="needs-validation" id="contact-form" noValidate>
                        <div className="col-lg-4 col-md-5">
                            <label htmlFor="fullname" className="form-label">Namn</label>
                            <input type="text" className="form-control" id="fullname" required />
                            <div className="invalid-feedback">Please enter your full name!</div>
                            <div className="valid-feedback"></div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" required />
                            <div className="invalid-feedback">Please provide a valid email address!</div>
                            <div className="valid-feedback"></div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <label htmlFor="subject" className="form-label">Ämne</label>
                            <input type="subject" className="form-control" id="subject" required />
                            <div className="invalid-feedback">Please provide a subject!</div>
                            <div className="valid-feedback"></div>
                        </div>
                        <div className="pb-3 col-lg-5 col-md-5">
                            <label htmlFor="message" className="form-label">Meddelande</label>
                            <textarea rows="5" type="message" className="form-control" id="message" required />
                            <div className="invalid-feedback">Please enter your message!</div>
                            <div className="valid-feedback"></div>
                        </div>
                        <div className="honeypot-field">
                            <label htmlFor="honeypot" className="form-label">Leave this field empty</label>
                            <input type="text" id="honeypot" name="honeypot" value={honeyPotCheck} onChange={setHoneyPotCheck} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-secondary">Send</button>
                    </form>
                </div>
            </div >
        </section >
    )
}

export default Contact