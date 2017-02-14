import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; - can do this in lieu of using CDN, but have to npm install bootstrap
import FetchWeather from '../actions/FetchWeatherAction';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    }
    this.changeZipCode = this.changeZipCode.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(event) {
    event.preventDefault();
    console.log(this.state.zipCode);
  }

  changeZipCode(event) {
    console.log(event.target.value);
    this.setState({
      zipCode: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.getWeather}>
        <input placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode} />
        <button type="submit" className="btn btn-primary btn-sm">Get the Weather!</button>
      </form>
    );
  }
}

//pass it 2 arguments - object (what it will be called locally) and dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    FetchWeather: FetchWeather
  }, dispatch);
}



// export default connect(null, mapDispatchToProps)(SearchBar);
export default SearchBar;
