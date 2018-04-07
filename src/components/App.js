import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import GraphsContainer from './GraphsContainer';
import { getICOData } from "../thunks/ico";
import { getConversionData } from "../thunks/conversion";

class App extends Component {
	componentWillMount() {
		this.props.getICOData();
		this.props.getConversionData('btc', 'usd');
		this.props.getConversionData('eth', 'usd');
		this.props.getConversionData('ltc', 'usd');
	}
  render() {
    return (
      <div className="app-wrapper">
        <NavBar />
				<GraphsContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getICOData: () => dispatch(getICOData()),
		getConversionData: (type, currency) => dispatch(getConversionData(type, currency))
	}
};
export default connect(null, mapDispatchToProps)(App);
