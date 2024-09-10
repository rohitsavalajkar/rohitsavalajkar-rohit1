import React,{useEffect,useState} from 'react';
import RewardsProgram from './RewardsProgram';
import {calculateRewardPoints} from './RewardsPoints';

 const App =() =>{
  const [monthlyPoints,setMonthlyPoints]= useState([]);
  const [transactionDetails,setTransactionDetails]= useState([]);

 const fetchData =() =>{
    
      return new Promise ((resolve) =>{
        setTimeout(() =>{
          resolve( [{customer_id:"c01",customer:"Sam Den", amount:"100",date:"01-08-24"},
            {customer_id:"c02",customer:"Sam Den", amount:"200",date:"04-08-24"},
            {customer_id:"c03",customer:"Harish Roy", amount:"120",date:"01-08-24"},
            {customer_id:"c04",customer:"Sam Den", amount:"100",date:"01-08-24"},
            {customer_id:"c05",customer:"Sam Den", amount:"200",date:"04-08-24"},
            {customer_id:"c06",customer:"Harish Roy", amount:"120",date:"01-08-24"},
           
        ]);
        }, 1000);
      });
  };
  
  useEffect(()=>{
    const getData = async() =>{
        const data = await fetchData();
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