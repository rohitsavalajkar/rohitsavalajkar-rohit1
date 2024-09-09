import React,{useEffect,useState} from 'react';
import RewardsProgram from './RewardsProgram';

const App =() =>{
  const [monthlyPoints,setMonthlyPoints]= useState([]);
  const [transactionDetails,setTransactionDetails]= useState([]);

 const fetchData =async() =>{
    
      return (
        [{customer_id:"c01",customer:"Sam Den", amount:"100",date:"01-08-24"},
          {customer_id:"c02",customer:"Sam Den", amount:"200",date:"04-08-24"},
          {customer_id:"c03",customer:"Harish Roy", amount:"120",date:"01-08-24"},
          {customer_id:"c04",customer:"Sam Den", amount:"100",date:"01-08-24"},
          {customer_id:"c05",customer:"Sam Den", amount:"200",date:"04-08-24"},
          {customer_id:"c06",customer:"Harish Roy", amount:"120",date:"01-08-24"},
         
      ]);
  };
  
  const calculatePoints =(amount) => {
    let points = 0;
    if(amount > 100){
      points += 2*(amount-100);
      points +=50;
    }
    else if(amount > 50){
      points +=(amount -50);
    }
    return points;
  };

  useEffect(()=>{
    const getData = async() =>{
        const data = await fetchData();
        const monthlyTotals ={};
        const transactionList =[];

        data.forEach(transaction =>{
          const points = calculatePoints(transaction.amount);
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