import React, { Component } from 'react';
import Header from './Header';
import { Doughnut } from 'react-chartjs-2';
import { getUnits } from "../utils/ico";
import { getOptions, getColors } from "../utils/chart";
import { getCoinsCount } from "../utils/conversion";

class TotalCoins extends Component {


	getData() {

		const data = {
			labels: [
				'Pre ICO',
				'Main ICO',
			],
		};
		const {preIco, mainIco} = this.props;
		const units = getUnits();

		return preIco.get('currency').map((currency, key) => {
			return (<div className="column">
				<Doughnut
					data={{
						...data,
						datasets: [{
							data: [getCoinsCount(preIco, key), getCoinsCount(mainIco, key)],
							backgroundColor: getColors()
						}]
					}}
					options={getOptions(units[key].name)}
				/>
			</div>);
		}).toArray();
	}

	render() {
		return (
			<div className='transactions-wrapper'>
				<Header content='Total Coins'/>
				<div className="grid">
					{this.getData()}
				</div>
			</div>
		);
	}
}

export default TotalCoins;
