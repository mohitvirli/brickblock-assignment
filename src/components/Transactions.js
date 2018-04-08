import React, { Component } from 'react';
import Header from './Header';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import Loader from './Loader';
import { getOptions, getColors } from "../utils/chart";

class Transactions extends Component {

	getDataArray = (ico) => ico.get('currency').map(currency => currency.get('length')).toArray();

	getHorizontalBar() {
		const { preIco, mainIco } = this.props;
		const barData = {
			labels: preIco.get('currency').keySeq().toArray(),
			datasets: [
				{
					label: 'Pre ICO',
					backgroundColor: getColors()[0],
					data: this.getDataArray(preIco)
				},
				{
					label: 'Main ICO',
					backgroundColor: getColors()[1],
					data: this.getDataArray(mainIco)
				},
			]
		};

		const barOptions = {
			categoryPercentage: 0.1,
			scales: {
				xAxes: [{
					stacked: true,
					scaleLabel: {
						display: true,
						labelString: 'Number of Transactions'
					},
				}],
				yAxes: [{
					stacked: true
				}]
			},
			...getOptions('Coinwise Transaction Distribution')
		};
		return <HorizontalBar data={barData} options={barOptions}/>;
	}

	getMainChart() {
		const { preIco, mainIco } = this.props;
		const data = {
			labels: [
				'Pre ICO',
				'Main ICO',
			],
			datasets: [{
				data: [preIco.get('total'), mainIco.get('total')],
				backgroundColor: getColors()
			}]
		};

		return <Doughnut data={data} options={getOptions('Overall Transaction Distribution')}/>

	}
	render() {
		const { preIco, mainIco } = this.props;
		return (
			<div className='transactions-wrapper'>
				<Header content='Transactions'/>
				{preIco.size && mainIco.size ? <div className="grid">
						<div className="column">
							{this.getMainChart()}
						</div>
						<div className="column">
							{this.getHorizontalBar()}
						</div>
					</div> : <Loader/>}
			</div>
		);
	}
}
export default Transactions;
