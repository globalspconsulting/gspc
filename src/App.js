import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header  className="responsive-image">
                    <div>
                        <div className="header">
                            <a href="index.html" className="logo">GSPC</a>
                            <div className="header-right">
                                <a href="#services">Services</a>
                                <a href="#techstack">Tech stack</a>
                                <a href="#aboutus">About us</a>
                                <a href="#contact">Contact us</a>
                            </div>
                        </div>
                        <div className="row" id="headerwrap">
                            <div className="intro">
                                <h1 className="headline">
                                    Global SP Consulting
                                </h1>
                                <p className="tagline">
                                    We connect from education to technology...
                                </p>
                            </div>
                            <div className=" subintro sp-display-left">
                                <div
                                    className="sp-yellow w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                                    <h4>START YOUR PROJECT WITH US</h4>
                                </div>
                                <div
                                    className="sp-yellow w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                                    <h4>HIRE PART-TIME/REMOTE ENGINEER</h4>
                                </div>
                                <div
                                    className="sp-yellow w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                                    <h4>CONSULTATION ON CAREER</h4>
                                </div>
                                <div
                                    className="sp-yellow w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                                    <h4>ACADEMIC PROJECTS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="services">
                    <div className="container">
                        <h2>We work on</h2>
                        <hr className="light"/>
                        <div className="row sp-padding-bottom-5">
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-project-diagram icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Software Development</div>
                                <div className="icon-para icon-para-padding">
                                    Web development is most crucial part in the digital world and we are best in
                                    end to end software service. From designing to deployment we provide scalable
                                    applications with latest technologies.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-balance-scale icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Software Testing</div>
                                <div className="icon-para icon-para-padding">
                                    You already have a software and we understand the importance of quality,
                                    and hence we provide best software testing support and application maintenance.
                                </div>
                            </div>
                        </div>
                        <div className="row sp-padding-bottom-5">
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-business-time icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Technical Consultation</div>
                                <div className="icon-para icon-para-padding">
                                    We provide best technical consultation and
                                    support to boost your business process and help in building robust
                                    web/desktop applications at affordable rates.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-cogs icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Business Consultation</div>
                                <div className="icon-para icon-para-padding">
                                    With our best research skills we help you with the analytics of current market scope
                                    in any domain and provide you the most accurate details for business development.
                                </div>
                            </div>
                        </div>
                        <div className="row sp-padding-bottom-5">
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-laptop-code icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Academic Projects</div>
                                <div className="icon-para icon-para-padding">
                                    We help you with the complete guidance and provide complete support along with
                                    learning sessions in developing quality Computer Science, Information Technology,
                                    Software Engineering projects.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-center">
                                <i className="fas fa-book-reader icon-padding sp-icon-color" id="icon"></i>
                                <div className="icon-desc icon-desc-padding">Career guidance</div>
                                <div className="icon-para icon-para-padding">
                                    Completed your under-graduation and not sure how to approach for Masters? We help
                                    you in each stage of international and regional admission process.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="techstack">
                    <div className="container">
                        <h2>Tech stack</h2>
                        <hr className="light"/>
                        <div className="row sp-padding-bottom-5">
                            <p className="icon-para icon-para-padding sp-padding-bottom-5">We work on
                                latest technology and have good insight about the academics and
                                professional project expectations.</p>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-react icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">React JS</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-angular icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">Angular JS</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-js-square icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">JavaScript</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-node icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">Node JS</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-java icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">Java</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-microsoft icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">Microsoft .NET</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fab fa-aws icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">AWS</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center sp-padding-bottom-25">
                                <i className="fas fa-database icon-padding" id="icon"></i>
                                <p className="icon-padding sp-tech-font">Database</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aboutus">
                    <div className="container">
                        <h2>About us</h2>
                        <hr className="light"/>
                        <div className="sp-about-bg">
                            <p className="sp-about-text">
                                Global SP Consulting is an IT service that believes in client satisfaction. We connect
                                education to technology providing best services in helping students with academic
                                guidance and proving business and technical consultation in the digital world.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container">
                        <h2>Let's Get In Touch!</h2>
                        <hr className="light"/>
                        <div className="row">
                            <div className="sp-contact-text">
                                <div className="col-lg-4 mr-auto text-center">
                                    <i className="fa fa-envelope fa-3x mb-3 " id="sp-contact-icon"></i>
                                    <p className="sp-contact-text">
                                        <a href="mailto:globalspconsulting2019@gmail.com">globalspconsulting2019@gmail.com</a>
                                    </p>
                                </div>
                                <div className="col-lg-4 ml-auto text-center">
                                    <i className="fa fa-phone fa-3x mb-3 " id="sp-contact-icon"></i>
                                    <p className="sp-contact-text ">607-374-0341</p>
                                </div>
                                <div className="col-lg-4 mr-auto text-center">
                                    <i className="fa fa-home fa-3x mb-3 " id="sp-contact-icon"></i>
                                    <p className="sp-contact-text">
                                        1404 N bouvier Street,
                                        Philadelphia, PA 19144.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <p>Posted by: Pooja Upadhyay Email us: <a href="mailto:globalspconsulting2019@gmail.com">
                        globalspconsulting2019@gmail.com</a>.</p>
                </footer>


            </div>
        );
    }
}

export default App;
