import React from 'react';

const RewardsProgram =({monthlyPoints,transactionDetails}) =>{
   
    return(
        <div>
            <h2>Monthly Points</h2>
           <table>
            <thead>
                <tr>
                    <th>Customer Name|</th>
                    <th>Month|</th>
                    <th>Month Wise Total Points|</th>
                </tr>
            </thead>
            <tbody>
                {monthlyPoints.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.customer}</td>
                        <td>{item.month}</td>
                        <td>{item.totalPoints}</td>
                    </tr>
                ))}
            </tbody>
           </table>
           <h2>Transaction Details</h2>
           <table>
            <thead>
                <tr>
                    <th>Customer Name|</th>
                    <th>Transaction Amount|</th>
                    <th>Calculated Points|</th>
                    <th>Date|</th>
                </tr>
            </thead>
            <tbody>
                {transactionDetails.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.customer}</td>
                        <td>{item.amount}</td>
                        <td>{item.points}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    );
};

export default RewardsProgram;