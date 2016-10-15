import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="intro">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <h1 className="brand-heading">Grayscale</h1>
                                    <p className="intro-text">A free, responsive, one page Bootstrap theme.
                                        <br />Created by Start Bootstrap.</p>
                                    <a href="#about" className="btn btn-circle page-scroll">
                                        <i className="fa fa-angle-double-down animated"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="about" className="container content-section text-center">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h2>About Grayscale</h2>
                            <p>Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                            <p>This theme features stock photos by <a href="http://gratisography.com/">Gratisography</a> along with a custom Google Maps skin courtesy of <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                            <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.</p>
                        </div>
                    </div>
                </section>

                <section id="download" className="content-section text-center">
                    <div className="download-section">
                        <div className="container">
                            <div className="col-lg-8 col-lg-offset-2">
                                <h2>Download Grayscale</h2>
                                <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
                                <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="container content-section text-center">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h2>Contact Start Bootstrap</h2>
                            <p>Feel free to email us to provide some feedback on our templates, give us suggestions for new templates and themes, or to just say hello!</p>
                            <p><a href="mailto:feedback@startbootstrap.com">feedback@startbootstrap.com</a>
                            </p>
                            <ul className="list-inline banner-social-buttons">
                                <li>
                                    <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                                </li>
                                <li>
                                    <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div id="map"></div>

                <footer>
                    <div className="container text-center">
                        <p>Copyright &copy; Your Website 2016</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;