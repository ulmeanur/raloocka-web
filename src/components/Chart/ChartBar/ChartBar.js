import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight; 

    if(props.maxValue > 0) {
       barFillHeight = Math.round((props.value/props.maxValue) * 100) + "%";
    }

    // (<div className="chart-bar">
    //     <p>aoleu chartbar</p>
    //     <div className="chart-bar__inner">
    //         <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
    //         {/* alternatives on how we can add style properties
    //         because style needs to receive an object we need to put the properties in an object {}
    //         and because there is a property that needs to be evaluated we used {}
    //         that is why below we have double {}
    //         <div className="chart-bar__fill" style={{height: barFillHeight, 'background-color: red'}}></div>
    //         <div className="chart-bar__fill" style={{height: barFillHeight, backgroundColor: 'red'}}></div> */}
    //     </div>
    //     <div className="chart-bar__label">{props.label}</div>
    // </div>);
	return <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
                </div>
                <div className="chart-bar__label">{props.label}</div>
                <div className="chart-bar__label">{props.value}</div>
            </div>;

};

export default ChartBar;
