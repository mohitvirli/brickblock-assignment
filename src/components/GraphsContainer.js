import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transactions from "./Transactions";
import TotalCoins from './TotalCoins';

class GraphsContainer extends Component {
	render() {
		const { preIco, mainIco } = this.props;
		return preIco.size && mainIco.size ? (
			<div className="graphs-container-wrapper">
				<div className="container">
					<Transactions preIco={preIco} mainIco={mainIco}/>
					<TotalCoins preIco={preIco} mainIco={mainIco}/>
				</div>
			</div>
		) : null;
	}
}


const mapStateToProps = (state) => {
	return {
		preIco: state.getIn(['ico', 'preIco']),
		mainIco: state.getIn(['ico', 'mainIco'])
	}
};

export default connect(mapStateToProps, null)(GraphsContainer);
