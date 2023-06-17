import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value); // it returns an array of values
	const totalMaximum = Math.max(...dataPointsValues); // as max funct expects values we need spread operator to extract the values from the array
	// aici este bugul nu pot sa fac map pe props.dataPoints.
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
