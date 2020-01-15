import React from 'react';
import ChartSection from '../../../Budgeter/Components/Charts/ChartSection';
const data = [
    {
      color: '#E38627',
      title: 'One',
      value: 5
    },
    {
      color: '#7AC942',
      title: 'Two',
      value: 8
    },
    {
      color: '#CCCCCC',
      title: 'Three',
      value: 20
    }
  ];
  const data2 = [
    {
        color: 'purple',
        title: 'One',
        value: 5
      },
      {
        color: '#DFE43E',
        title: 'Two',
        value: 20
      },
  ]
export default function Budger(){
    return(
        <div className="col-sm-12 d-flex flex-wrap h-35 pt-2 justify-content-center align-items-center charts-area">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-center align-items-center">
                
               <ChartSection data={data}
               heading={"Total Spent"}
               price={"$1,852.00"}
               lineWidth = {40}
               isRoundedBorder = {true}
               /> 
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-center align-items-center">
            <ChartSection data={data2}
               heading={"Over/Under"}
               price={"$202.00"}
               lineWidth = {5}
               isRoundedBorder = {false}
               /> 
            </div>
           </div>
    )
}