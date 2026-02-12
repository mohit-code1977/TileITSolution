import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-contact">
            <section className="contact-hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>Ready to start your project? We're here to help.</p>
                </div>
            </section>

            <div className="container">
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Information</h3>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>info@tilesitsolutions.com</p>
                                <p>support@tilesitsolutions.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                                <p>Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div className="info-content">
                                <h4>Office</h4>
                                <p>123 Innovation Drive</p>
                                <p>Tech District, NY 10001</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3>Request Consultation</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" className="form-control" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" className="form-control" placeholder="john@company.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" className="form-control">
                                    <option>General Inquiry</option>
                                    <option>Project Consultation</option>
                                    <option>Support Request</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" placeholder="Tell us about your project..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
