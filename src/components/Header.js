import React from 'react';

import logo from '../images/logo.jpg';

function Header(props) {
    return (
        <header id="header">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <div className="logo-container">
                                <div className="logo">
                                    <img src={logo} alt="Sales Assist" width="190" height="60" />
                                </div>
                                <h3>SALES<br />ASSIST</h3>
                            </div>

                            <div className="business">
                                <ul className="business-links">
                                    <li className="active"><a href="#">Consumer</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Fido</a></li>
                                    <li><a href="#">Chatr</a></li>
                                </ul>
                            </div>

                            <div className="header-top-menu-right">
                                <div className="header-admin">
                                    <ul className="header-admin-menu">
                                        <li><a href="#">Français</a></li>
                                        <li><a href="#">Admin</a></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </div>

                                <div className="search">
                                    <ul className="search-menu">
                                        <li><a href="#"><i className="fa fa-bell-o"></i></a></li>
                                        <li><a href="#"><i className="fa fa-comments-o"></i></a></li>
                                        <li><a href="#"><i className="fa fa-search"></i></a></li>
                                        <li><a href="#"><i className="fa fa-print"></i></a></li>
                                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#"><i className="fa fa-chevron-left"></i> Back</a></li>
                            <li><a href="#">Start Over</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Products & Services</a></li>
                            <li><a href="#">Promos</a></li>
                            <li><a href="#">Reference Centre</a></li>
                            <li><a href="#">Brochures</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;