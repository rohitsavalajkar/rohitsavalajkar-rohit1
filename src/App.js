import React,{useEffect,useState} from 'react';
import RewardsProgram from './RewardsProgram';
import {calculateRewardPoints} from './RewardsPoints';

 const App =() =>{
  const [monthlyPoints,setMonthlyPoints]= useState([]);
  const [transactionDetails,setTransactionDetails]= useState([]);

  useEffect(()=>{
    const getData = async() =>{
      const response = await fetch('/transactions.json')
        const data = await response.json();
        const monthlyTotals ={};
        const transactionList =[];

        data.forEach(transaction =>{
          const points = calculateRewardPoints(transaction.amount);
          const month =transaction.date.split('-')[1]

          if(!monthlyTotals[transaction.customer]){
            monthlyTotals[transaction.customer] ={};
          }
          if(!monthlyTotals[transaction.customer][month]){
            monthlyTotals[transaction.customer][month] = 0;
          }
          monthlyTotals[transaction.customer][month] += points;

          transactionList.push({
            customer:transaction.customer,
            amount:transaction.amount,
            points:points,
            date:transaction.date
          });
        });


        const monthlyPointsData = Object.keys(monthlyTotals).map(customer =>{
          return Object.keys(monthlyTotals[customer]).map(month =>({
            customer:customer,
            month:month,
            totalPoints:monthlyTotals[customer][month],
          }));
        }).flat();
        setMonthlyPoints(monthlyPointsData);
        setTransactionDetails(transactionList);
        
    };
    getData();
},[]);
return(
  <div className='App'>
    <h1>Rewards Program</h1>
    <RewardsProgram monthlyPoints ={monthlyPoints}
    transactionDetails={transactionDetails}/>
  </div>
)

}

 

 export default App;