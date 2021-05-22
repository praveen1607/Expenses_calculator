import React from 'react';
import './ChartBar.css'

const ChartBar=(props)=>{
    let BarFillHeight='0%';
    console.log(props.MaxValue);
    if(props.MaxValue > 0){
        BarFillHeight=Math.round((props.value/props.MaxValue) * 100) + '%';
    }
    console.log(BarFillHeight);
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                style={{height: BarFillHeight}}>
                </div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )

}
export default ChartBar;