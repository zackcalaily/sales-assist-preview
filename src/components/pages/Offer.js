import React from 'react';
import numeral from 'numeral';
import { createClient } from 'contentful';
import { SPACE_ID, ENVIRONMENT_ID, ACCESS_TOKEN } from '../../constants';
import showdown from 'showdown';

class Offer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: null,
            showOrHide: false,
        }

        this.converter = new showdown.Converter();
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

    onToggleShowOrHideHandler = (event) => {
        event.preventDefault();
        this.setState({ showOrHide: !this.state.showOrHide });
    }

    getColumnsForProduct(product) {
        const columns = [];
        const scope = this.state.entry.fields.offer.fields.pricing.filter(price => price.fields.product === product);

        scope.forEach(s => {
            columns.push(<td>${numeral(Math.max(s.fields.basePrice - s.fields.discount, 0)).format('0.00')}</td>);
        })

        return columns;
    }      

    render() {
        if (this.state.entry === null) {
            return null;
        }

        console.log(this.state.entry);

        return (
            <div className="promo">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="promo-image-container">
                            <img className="img-responsive" src={this.state.entry.fields.image.fields.file.url} alt="promo pic" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1>{this.state.entry.fields.title}</h1>
                        <p>{this.state.entry.fields.description}</p>
                        
                        <table>
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Starter</td>
                                    <td>Select</td>
                                    <td>Popular</td>
                                    <td>Premier</td>
                                </tr>
                                <tr>
                                    <td>Ignite 150u</td>
                                    {this.getColumnsForProduct('Ignite 150u')}
                                </tr>
                                <tr>
                                    <td>Ignite 500u</td>
                                    {this.getColumnsForProduct('Ignite 500u')}
                                </tr>
                                <tr>
                                    <td>Ignite Gigabit</td>
                                    {this.getColumnsForProduct('Ignite Gigabit')}
                                </tr>
                            </tbody>
                        </table>

                        <a href="#" onClick={this.onToggleShowOrHideHandler}>(+) SEE FULL DETAILS</a>
                        <div className={this.state.showOrHide === true ? 'collapse show' : 'collapse hide'}>
                            <div className="fees">{this.state.entry.fields.offer.fields.fees.map((fee, index) => <div key={index}>{fee.fields.description} of ${fee.fields.amount} {fee.fields.hasOwnProperty('taxesApplicable') ? 'plus taxes ' : null}applies</div>)}</div>

                            <strong>Eligible:</strong>
                            <ul><li>{this.state.entry.fields.offer.fields.eligible}</li></ul>
                            
                            <strong>Non-Eligible:</strong>
                            <ul>{this.state.entry.fields.offer.fields.nonEligible.split("\n").map((item, index) => <li key={index}>{item}</li>)}</ul>

                            <strong>Other points to mention</strong>
                            <div dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.state.entry.fields.pointsToMention) }}></div>

                            <strong>{this.state.entry.fields.offer.fields.code}</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Offer;