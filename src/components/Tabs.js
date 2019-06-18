import React from 'react';

function Tabs(props) {
    return (
        <div className="container-fluid tab-navigation-container">
            <ul className="nav nav-tabs">
                <li><a href="#">Rogers Infinite</a></li>
                <li><a href="#">Communication</a></li>
                <li className="active"><a href="#">Non-Advertised Offers</a></li>
                <li><a href="#">Printable Resources</a></li>
                <li><a href="#">Competitive Eye</a></li>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Rate Card</a></li>
                <li><a href="#">Offer Grid</a></li>
                <li className="ml-auto"><a href="#">Reference Centre</a></li>
            </ul>

            <hr />
        </div>
    );
}

export default Tabs;