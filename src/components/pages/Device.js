import React from 'react';
import { createClient } from 'contentful';
import { SPACE_ID, ENVIRONMENT_ID, ACCESS_TOKEN } from '../../constants';

import hires from '../../images/feature_thumbs_hires.png';
import selfie from '../../images/feature_thumbs_selfie.png'
import applications from '../../images/feature_thumbs_applications.png';
import camera from '../../images/feature_thumbs_camera.png';
import cellular from '../../images/feature_thumbs_cellular_voice.png';
import battery from '../../images/feature_thumbs_battery.png';
import dimensions from '../../images/feature_thumbs_Dimension.png';
import connect from '../../images/feature_thumbs_connect.png';
import pricing from '../../images/pricing.png';

class Device extends React.Component {
    images = [
        hires,
        selfie,
        applications,
        camera,
        cellular,
        battery,
        dimensions,
        connect
      ];

    constructor(props) {
        super(props);

        this.state = {
            entry: null,
            showOrHide: false,
        }
    }    

    componentDidMount() {
        const client = createClient({
            space: SPACE_ID,
            environment: ENVIRONMENT_ID,
            accessToken: ACCESS_TOKEN
        });

        client.getEntry(this.props.match.params.id, { include: 3 })
            .then(response => this.setState({ entry: response }));
    }

    render() {
        if (this.state.entry === null) {
            return null;
        }


        return (
        <div className="main-product-info-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-product-phone-container-header">
                  <h4>{this.state.entry.fields.name}</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="phone-page-image-container">
                  <img src={this.state.entry.fields.images[0].fields.file.url} />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="phone-page-top-feature-container">
                  <div className="phone-page-section-header">
                    <h4 className="blue-text">Top Features:</h4>
                  </div>

                  <div className="phone-page-top-features-container">
                    <ul>
                      {this.state.entry.fields.topFeatures.split("\n").map((list, index) => (<li key={index}><img src={this.images[index]} /><h4>{list}</h4></li>))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img src={pricing} />
              </div>
            </div>

            <div className="row">
              <div className="main-product-features-header">
                <div className="main-product-features-header-image-container"></div>
                <h3>Overview</h3>
              </div>

              <div className="phone-page-overview-container col-lg-10 offset-lg-1">
                <div className="phone-page-overview-container">
                  <div className="specification-list">
                    <ul>
                      {this.state.entry.fields.overview.split("\n").map((list, index) => (<li key={index}>{list}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="main-product-features-header">
                <div className="main-product-features-header-image-container"></div>
                <h3>Specifications</h3>
              </div>
                    
              <div className="phone-page-spec-container col-lg-10 offset-lg-1">
                <div className="phone-page-spec-container">
                  <div className="specification-list">
                    <ul>
                      {this.state.entry.fields.specifications.split("\n").map((list, index) => (<li key={index}>{list}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
    
export default Device;