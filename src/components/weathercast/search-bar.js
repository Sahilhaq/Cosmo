import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input 
                    value={this.state.term}
                    onChange={ e => this.setState({ term: e.target.value}) }
                    placeholder="Search for a city to know its weather forecast"
                    className="form-control" />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);