import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import '../../App.css';

function HomeContent() {
    return (
        <div className="content">
            <h2 className="title">Home</h2>
            <p>Welcome to ABC Software</p>
            <p>At ABC Software, we're dedicated to providing innovative software solutions for businesses worldwide. With a focus on user-centric design and cutting-edge technology, we strive to simplify communication and enhance productivity. Explore our website to learn more about our Chat Application and how it can streamline your team's collaboration.</p>
        </div>
    );
}

function AboutContent() {
    return (
        <div className="content">
            <h2 className="title">About</h2>
            <p>About ABC Software</p>
            <p>ABC Software was founded in 2015 with a vision to revolutionize communication in the digital age. Over the years, we have evolved into a leading provider of software solutions, serving clients across various industries. Our team is comprised of passionate professionals dedicated to delivering exceptional products and services. At ABC Software, we believe in innovation, integrity, and customer satisfaction. Learn more about our journey and values that drive us forward.</p>
        </div>
    );
}

function CareerContent() {
    return (
        <div className="content">
            <h2 className="title">Career</h2>
            <p>Join Our Team at ABC Software</p>
            <p>Are you passionate about software development? Do you thrive in a dynamic environment where innovation is encouraged? If so, consider joining the ABC Software team! We are always on the lookout for talented individuals who are eager to contribute their skills and creativity. Explore our current openings and take the next step in your career with us.</p>
            <p>To apply, please 
             email your resume to hr@abcsoftware.com</p>
        </div>
    );
}

function ProductContent() {
    return (
        <div className="content">
            <h2 className="title">Product</h2>
            <p>Discover Chat Application</p>
            <p>Chat Application is a comprehensive messaging platform designed to streamline communication and collaboration within teams. With features such as real-time messaging, file sharing, and video conferencing, Chat Application offers a seamless communication experience for businesses of all sizes. Whether you're a startup or a large enterprise, Chat Application is tailored to meet your communication needs. Explore its capabilities and see how it can transform your team's workflow.</p>
            <a href="https://dashing-scone-86c79a.netlify.app/" target="_blank" rel="noopener noreferrer" className="primary-button">Open Chat Application</a>
        </div>
    );
}

function ContactContent() {
    return (
        <div className="content">
            <h2 className="title" >Contact</h2>
            <p>Get in Touch with ABC Software</p>
            <p>Have a question or inquiry? We'd love to hear from you! Reach out to us via email at "abcsoftware@gmail.com" or give us a call at 7358799555. Our team is here to assist you with any queries you may have. Connect with us today and let's start a conversation.</p>
        </div>
    );
}

export default function HomePage() {
    const { path } = useRouteMatch();

    return (
        <div>
            <header className="header">
                <div className="logout-btn">
                    <Link to="/">
                        <button className="primary-button">Log out</button>
                    </Link>
                </div>
                <nav className="navbar">
                    <Link to={`${path}/home`}> <button className="nav-button">Home</button></Link>
                    <Link to={`${path}/about`}> <button className="nav-button">About</button></Link>
                    <Link to={`${path}/career`}> <button className="nav-button">Career</button></Link>
                    <Link to={`${path}/product`}> <button className="nav-button">Product</button></Link>
                    <Link to={`${path}/contact`}> <button className="nav-button">Contact</button></Link>
                </nav>
            </header>
            {/* Content Sections */}
            <div>
                <Switch>
                    <Route path={`${path}/home`}>
                        <HomeContent />
                    </Route>
                    <Route path={`${path}/about`}>
                        <AboutContent />
                    </Route>
                    <Route path={`${path}/career`}>
                        <CareerContent />
                    </Route>
                    <Route path={`${path}/product`}>
                        <ProductContent />
                    </Route>
                    <Route path={`${path}/contact`}>
                        <ContactContent />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
