import React, { Component } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {fetchWeather} from "./../actions/index";

 class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
    }

    onInputChange(event) {

        this.setState({ term: event.target.value });
        console.log("value:::", event.target.value);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input className="form-control" placeholder="Get a five day forecast in yout favourite cities" value={this.state.term} onChange={this.onInputChange.bind(this)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);